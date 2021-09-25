import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Solution from '../solution/solution.entity';
import Error from '../error/error.entity';

@Entity()
export default class File {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'blob'
    })
    data: string

    @CreateDateColumn()
    dateCreated!: Date

    @ManyToOne(() => Solution, solution => solution.images)
    solutionOrError!: Solution | Error;

    constructor(data: string) {
        this.data = data
    }
}
