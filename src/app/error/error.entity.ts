import { Tag } from './../tag/tag.entity';
import Solution from '../solution/solution.entity'

export default interface Error {
    id: string
    title: string
    description: string
    dateCreated: Date
    log: string
    images: string[]

    userId: string

    tags: Tag[]
    solutions: Solution[]
}
