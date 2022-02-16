import { Body, Controller, Post, UseGuards, Request, Res, HttpStatus} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';


@ApiTags('auth')
@Controller('api')
export class UsersController {
  constructor(
    private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  @ApiOkResponse({ type: UserDto })
  register(@Body() user: UserDto): Promise<UserDto> {
    return this.authService.register(user);
  }
}
