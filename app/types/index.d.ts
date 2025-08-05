export interface ICategory {
    main: string
    children: string
}

export interface IDependency {
    id: string
    name: string
    description: string
    category: ICategory
    packageName?: string
    github?: string
    npm?: string
    website: string
    author?: {
        name?: string
        url?: string
    }
    stars?: number
    downloads?: number
}

export interface IPayload {
    [key: string]: {
        [key: string]: IDependency[]
    }
}

export interface IDependencyCategories {
    [key: string]: IDependency[]
}

export interface NPMDownloadStats {
    downloads: number
    period: string
}

export interface NPMDownloadResponse {
    downloads: number
    start: string
    end: string
    package: string
}

export interface GitHubRepo {
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
    owner: {
        login: string
        html_url: string
    }
    homepage: string
}

export interface GitHubRepoStars {
    name: string
    owner: {
        login: string
        html_url: string
    }
    description: string
    homepage: string
    stars: number
    forks: number
    issues: number
    lastCommit: string
    license: string
}
