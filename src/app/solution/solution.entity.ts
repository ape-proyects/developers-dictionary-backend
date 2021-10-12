import Error from '../error/error.entity'

export default interface Solution {
    id: string
    text: string
    link: string
    dateCreated: Date
    images: string[]

    error: Error
}
