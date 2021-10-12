export enum TagTypes {
    PROJECT = 'project',
    TECHNOLOGY = 'technology',
    LANGUAGE = 'language',
    ARCHITECTURE = 'architecture',
    TOOLS = 'tools'
}

export interface Tag {
    id: string
    name: string
    type: TagTypes

    userId: string
}
