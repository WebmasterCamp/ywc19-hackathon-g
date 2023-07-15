import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { SurveyService } from './survey.service'
import { ApiTags } from '@nestjs/swagger'
import { SurveyDto } from './survey.dto'
import { Survey } from 'src/entities/Survey.entity'

@ApiTags('survey')
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async create(@Body() surveyDto: SurveyDto) {
    return await this.surveyService.create(<Survey>{
      contractType: surveyDto.contractType,
      experienceType: surveyDto.experience,
      jobType: surveyDto.job,
      salaryType: surveyDto.salary,
    })
  }
}
