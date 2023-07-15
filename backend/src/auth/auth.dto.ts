import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class AuthDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'Username is too short',
  })
  @IsOptional()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(8, {
    message: 'Password is too short',
  })
  password: string;
}
