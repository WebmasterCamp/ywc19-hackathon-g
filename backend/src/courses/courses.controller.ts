import { Controller, Get, Param } from '@nestjs/common'
import { CoursesService } from './courses.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll()
  }
}
