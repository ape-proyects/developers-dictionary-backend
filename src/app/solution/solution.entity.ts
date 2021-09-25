import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Error from '../error/error.entity'
import File from '../file/file.entity'

@Entity()
export default class Solution {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    text: string

    @Column({
        nullable: true,
    })
    link!: string

    @CreateDateColumn()
    dateCreated!: Date

    @OneToMany(() => File, file => file.solutionOrError)
    images!: File[]

    @ManyToOne(() => Error, error => error.solutions)
    error: Error

    constructor(text: string, error: Error) {
        this.text = text
        this.error = error
    }

    addImage(image: File): void {
        if(!this.images){
            this.images = []
        }
        this.images.push(image)
    }
}
