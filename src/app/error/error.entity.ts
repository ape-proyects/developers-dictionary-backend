import { Tag } from './../tag/tag.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Solution from '../solution/solution.entity'
import File from '../file/file.entity'

@Entity()
export default class Error {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    dateCreated!: Date

    @OneToMany(() => File, file => file.solutionOrError)
    images!: File[]

    @OneToMany(() => File, file => file.solutionOrError)
    logs!: File[]

    @ManyToMany(() => Tag)
    @JoinTable()
    tags!: Tag[]

    @OneToMany(() => Solution, solution => solution.error)
    solutions!: Solution[]

    // @ManyToOne()
    // user: User

    constructor(title: string, description: string) {
        this.title = title
        this.description = description
    }

    addImage(image: File): void {
        if(!this.images){
            this.images = []
        }
        this.images.push(image)
    }

    addLog(log: File): void {
        if(!this.logs){
            this.logs = []
        }
        this.logs.push(log)
    }

    addTag(tag: Tag): void {
        if(!this.tags){
            this.tags = []
        }
        this.tags.push(tag)
    }

}
