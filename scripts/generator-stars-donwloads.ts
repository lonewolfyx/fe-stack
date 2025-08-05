import dependenciesData from '../public/dependency.json'

import dotenv from 'dotenv'
import { resolve } from 'node:url'
import { outputFile } from 'fs-extra'
import { extractRepoPath, fetchGitHubStars } from '../app/utils/github'
import { fetchNPMDownloads } from '../app/utils/npm'

dotenv.config({ path: resolve(process.cwd(), './.env') })

const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const safeFetch = <T>(shouldFetch: boolean, fetchFn: () => Promise<T>, fallback: T): Promise<T> => {
    return shouldFetch ? fetchFn() : Promise.resolve(fallback)
}

(async () => {
    const enriched = []

    for (const tool of dependenciesData) {
        const [stars, downloads] = await Promise.all([
            safeFetch(!!tool.github, () => fetchGitHubStars(extractRepoPath(tool.github!)), {
                stars: 0,
                forks: 0,
                issues: 0,
                lastCommit: '',
                license: '',
            }),
            safeFetch(!!tool.packageName, () => fetchNPMDownloads(tool.packageName!), {
                downloads: 0,
                period: 'string',
            }),
        ])

        enriched.push({
            ...tool,
            stars: stars.stars,
            downloads: downloads.downloads,
        })

        console.log(`Processed ${tool.name}: ⭐ ${stars.stars}, 📦 ${downloads.downloads}`)
        await delay(300) // wait 300ms then next
    }
    // console.log(enriched)

    await outputFile(
        `${process.cwd()}/public/dependency.json`,
        JSON.stringify(enriched, null, 2),
        {
            encoding: 'utf-8',
            flag: 'w',
        },
    )
})()
