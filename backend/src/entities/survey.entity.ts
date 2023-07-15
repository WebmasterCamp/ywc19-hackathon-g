import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Survey {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 50 })
  salaryType: string

  @Column('varchar', { length: 50 })
  jobType: string

  @Column('varchar', { length: 50 })
  experienceType: string

  @Column('varchar', { length: 50 })
  contractType: string

  @CreateDateColumn({ readonly: true })
  createdAt: Date

  @UpdateDateColumn({ readonly: true })
  modifiedAt: Date
}
