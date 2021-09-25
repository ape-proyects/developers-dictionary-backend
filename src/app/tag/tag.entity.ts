import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum TagTypes {
    PROJECT = 'project',
    TECHNOLOGY = 'technology',
    LANGUAGE = 'language',
    ARCHITECTURE = 'architecture',
}

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name: string

    // Use string type in test env as sqlite does not support enum type
    @Column(process.env.NODE_ENV !== 'test' ? { type: "enum", enum: TagTypes, } : {})
    type: TagTypes | string

    // @ManyToOne()
    // user: User

    constructor(name: string, type: TagTypes | string) {
        this.name = name
        this.type = type
    }
}
