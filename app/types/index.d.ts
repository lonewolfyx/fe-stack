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
