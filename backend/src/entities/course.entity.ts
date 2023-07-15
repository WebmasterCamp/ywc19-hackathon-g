import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 50 })
  courseName: string

  @Column('varchar', { length: 50 })
  courseDetail: string

  @Column('varchar', { length: 50 })
  courseLocation: string

  @Column('varchar', { length: 50 })
  coursePrice: string

  @Column('integer')
  courseDuration: number

  @CreateDateColumn({ readonly: true })
  createdAt: Date

  @UpdateDateColumn({ readonly: true })
  modifiedAt: Date
}
