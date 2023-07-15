import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { algo, SHA256 } from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { AuthDto } from '../auth/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);

    if (
      user &&
      user.email == email &&
      user.hashedPassword === this.hashPassword(password, user.passwordSalt)
    )
      return user;
    return null;
  }

  async login({ email, password }: AuthDto) {
    const user = await this.validateUser(email, password);
    if (!user) throw new BadRequestException();
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register({ email, password, username }: AuthDto) {
    const passwordSalt = uuidv4();
    const hashedPassword = this.hashPassword(password, passwordSalt);

    const user = await this.usersService.create(
      email,
      username,
      hashedPassword,
      passwordSalt,
    );
    const payload = { email: user.email, id: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  private hashPassword(password: string, salt: string) {
    const sha256 = algo.SHA256.create();
    sha256.update(password);
    sha256.update(SHA256(salt));
    const hash = sha256.finalize().toString();
    return hash;
  }
}
