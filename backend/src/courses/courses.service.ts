import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Course } from 'src/entities/course.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async findAll() {
    const data = await this.courseRepository.find()
    return { data }
  }
}
