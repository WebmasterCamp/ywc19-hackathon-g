import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('integer')
  salary: number

  @Column('varchar', { length: 50 })
  job: string

  @Column('integer')
  minimumExperience: number

  @Column('varchar', { length: 50 })
  contractType: string

  @Column('varchar', { length: 50 })
  keywork: string

  @CreateDateColumn({ readonly: true })
  createdAt: Date

  @UpdateDateColumn({ readonly: true })
  modifiedAt: Date
}
