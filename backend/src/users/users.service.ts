import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(
    email: string,
    username: string,
    hashedPassword: string,
    passwordSalt: string,
  ) {
    const result = await this.usersRepository.save({
      email,
      username,
      hashedPassword,
      passwordSalt,
    });
    return result;
  }

  async findOne(email: string) {
    const user = this.usersRepository.findOne({
      where: { email },
      select: ['id', 'passwordSalt', 'hashedPassword', 'email'],
    });
    return user;
  }
}
