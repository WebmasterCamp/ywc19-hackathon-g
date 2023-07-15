import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Survey } from 'src/entities/Survey.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  async create(survey: Survey) {
    const data = await this.surveyRepository.save(survey)
    return { data }
  }
}
