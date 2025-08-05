import type { GitHubRepo, GitHubRepoStars } from '~/types'
import { $fetch } from 'ofetch'

export const extractRepoPath = (githubUrl: string): string => {
    // Handle various GitHub URL formats
    const patterns = [/github\.com\/([^/]+\/[^/]+)/, /github\.com\/([^/]+\/[^/]+)\.git/, /github\.com\/([^/]+\/[^/]+)\/$/]

    for (const pattern of patterns) {
        const match = githubUrl.match(pattern)
        if (match) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return match[1].replace('.git', '')
        }
    }

    throw new Error(`Invalid GitHub URL: ${githubUrl}`)
}

export const fetchGitHubStars = async (repoPath: string): Promise<GitHubRepoStars> => {
    try {
        const url = `https://api.github.com/repos/${repoPath}`
        const token = process.env.REQUEST_TOKEN

        const response = await $fetch<GitHubRepo>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
            timeout: 10000, // 10 second timeout
        })

        return {
            name: response.name,
            owner: response.owner,
            description: response.description,
            homepage: response.homepage ?? response.html_url,
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
            name: '',
            owner: {
                login: '',
                html_url: '',
            },
            description: '',
            homepage: '',
            stars: 0,
            forks: 0,
            issues: 0,
            lastCommit: new Date().toISOString(),
            license: 'Unknown',
        }
    }
}
