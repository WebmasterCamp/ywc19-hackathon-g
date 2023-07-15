import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Course } from './course.entity'
import { Survey } from './Survey.entity'
import { User } from './user.entity'

@Entity()
export class UserCourse {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Course, { nullable: false })
  course: Course

  @ManyToOne(() => User, { nullable: false, eager: true })
  user: User

  @Column('bool', { default: false })
  isCompleted: boolean

  @Column('integer', { default: 0 })
  hoursUsed: number
}
