import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/auth/auth.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userDto: AuthDto) {
    return this.authService.register(userDto);
  }

  @Post('login')
  login(@Body() userDto: AuthDto) {
    return this.authService.login(userDto);
  }
}
