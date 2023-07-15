import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator'

export class SurveyDto {
  @ApiProperty()
  @IsString()
  contractType: string

  @ApiProperty()
  @IsString()
  experience: string

  @ApiProperty()
  @IsString()
  job: string

  @ApiProperty()
  @IsString()
  salary: string
}
