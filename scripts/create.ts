import minimist from 'minimist'
import { isEmpty } from 'radash'
import { fetchGitHubStars } from '../app/utils/github'
import dotenv from 'dotenv'
import { resolve } from 'node:url'
import { $fetch } from 'ofetch'
import { fetchNPMDownloads } from '../app/utils/npm'
import dependenciesData from '../public/dependency.json'
import { outputFile } from 'fs-extra'

dotenv.config({ path: resolve(process.cwd(), './.env') })

interface IParse {
    '_'?: string[]
    'owner': string // git owner
    'repo': string// git repo
    'main-category': string
    'chil-category': string
    'npm': string
}

interface IPackageInfo {
    name: string
}

const args = minimist(process.argv.slice(2)) as IParse

const main = async () => {
    if (isEmpty(args.owner) || isEmpty(args.repo) || isEmpty(args['main-category']) || isEmpty(args['chil-category'])) {
        console.error(`Missing relevant parameters, use them correctly：
tsx ./scripts/create.ts --repo={{repo}} --owner={{owner}} --main-category={{main-category}} --chil-category={{chil-category}}`)
        process.exit(1)
    }

    const gitInfo = await fetchGitHubStars(`${args.owner}/${args.repo}`)

    const packageInfo = await $fetch<IPackageInfo>(`https://cdn.jsdelivr.net/gh/${args.owner}/${args.repo}/package.json`, {
        timeout: 10000,
    })

    const packageName = args.npm ?? packageInfo.name
    const { downloads } = await fetchNPMDownloads(packageName)

    dependenciesData.push({
        id: gitInfo.name,
        name: gitInfo.name,
        description: gitInfo.description,
        category: {
            main: args['main-category'],
            children: args['chil-category'],
        },
        packageName: packageName,
        github: `https://github.com/${args.owner}/${args.repo}`,
        npm: `https://www.npmjs.com/package/${packageName}`,
        website: gitInfo.homepage,
        author: {
            name: gitInfo.owner.login,
            url: gitInfo.owner.html_url,
        },
        stars: gitInfo.stars,
        downloads: downloads,
    })

    await outputFile(
        `${process.cwd()}/public/dependency.json`,
        JSON.stringify(dependenciesData, null, 2),
        {
            encoding: 'utf-8',
            flag: 'w',
        },
    )
}

(async () => {
    await main().catch((err) => {
        console.error('error:', err)
        process.exit(1)
    })
})()
