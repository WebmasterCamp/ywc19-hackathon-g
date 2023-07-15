import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 50, unique: true })
  email: string;

  @Column('varchar', { length: 50, unique: true })
  username: string;

  @Column('text', { select: false })
  hashedPassword: string;

  @Column('text', { select: false })
  passwordSalt: string;

  @Column('text', { nullable: true })
  detail: string;

  @CreateDateColumn({ readonly: true })
  createdAt: Date;

  @UpdateDateColumn({ readonly: true })
  modifiedAt: Date;
}
