import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Res, HttpStatus, Put } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';


@Controller()
export class UsersController {
  constructor(
    private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Body() user) {
    return this.authService.register(user);
  }
}
