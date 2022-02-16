import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from '../users.service';

@Injectable()
export class AuthService {
  constructor(
      private usersService: UsersService,
      private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.dataValues.email, sub: user.dataValues.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  register(user: UserDto): Promise<UserDto>{
    return this.usersService.create(user.email, user.password);
  }
}