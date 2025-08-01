import { $fetch } from 'ofetch'
import dependenciesData from '../public/dependency.json'

import dotenv from 'dotenv'
import { resolve } from 'node:url'
import { writeFile } from 'node:fs/promises'

dotenv.config({ path: resolve(process.cwd(), './.env') })

interface NPMDownloadStats {
    downloads: number
    period: string
}

interface NPMDownloadResponse {
    downloads: number
    start: string
    end: string
    package: string
}

interface GitHubRepo {
    name: string
    full_name: string
    description: string
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    license: {
        name: string
    } | null
    pushed_at: string
    html_url: string
}

interface GitHubRepoStars {
    stars: number
    forks: number
    issues: number
    lastCommit: string
    license: string
}

const fetchNPMDownloads = async (packageName: string, period: string = 'last-month'): Promise<NPMDownloadStats> => {
    try {
        const url = `https://api.npmjs.org/downloads/point/${period}/${packageName}`

        const response = await $fetch<NPMDownloadResponse>(url, {
            timeout: 10000, // 10 second timeout
        })

        return {
            downloads: response.downloads || 0,
            period: period,
        }
    }
    catch (error) {
        console.error(`Failed to fetch NPM downloads for ${packageName}:`, error)

        // Return fallback data
        return {
            downloads: 0,
            period: period,
        }
    }
}

const fetchGitHubStars = async (repoPath: string): Promise<GitHubRepoStars> => {
    try {
        const url = `https://api.github.com/repos/${repoPath}`
        const token = process.env.GITHUB_TOKEN

        const response = await $fetch<GitHubRepo>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
            timeout: 10000, // 10 second timeout
        })

        return {
            stars: response.stargazers_count,
            forks: response.forks_count,
            issues: response.open_issues_count,
            lastCommit: response.pushed_at,
            license: response.license?.name || 'Unknown',
        }
    }
    catch (error) {
        console.error('Failed to fetch GitHub stars:', error)
        return {
            stars: 0,
            forks: 0,
            issues: 0,
            lastCommit: new Date().toISOString(),
            license: 'Unknown',
        }
    }
}
const extractRepoPath = (githubUrl: string): string => {
    // Handle various GitHub URL formats
    const patterns = [/github\.com\/([^/]+\/[^/]+)/, /github\.com\/([^/]+\/[^/]+)\.git/, /github\.com\/([^/]+\/[^/]+)\/$/]

    for (const pattern of patterns) {
        const match = githubUrl.match(pattern)
        if (match) {
            return match[1].replace('.git', '')
        }
    }

    throw new Error(`Invalid GitHub URL: ${githubUrl}`)
}

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

    await writeFile(
        resolve(process.cwd(), './public/dependency.json'),
        JSON.stringify(enriched, null, 2),
        {
            encoding: 'utf-8',
            flag: 'w',
        },
    )
})()
