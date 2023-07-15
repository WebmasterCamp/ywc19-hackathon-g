import { Module } from '@nestjs/common'
import { SurveyService } from './survey.service'
import { SurveyController } from './survey.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Survey } from 'src/entities/survey.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  controllers: [SurveyController],
  providers: [SurveyService],
  exports: [SurveyService],
})
export class SurveyModule {}
