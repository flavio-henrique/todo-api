import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from './auth/auth.service';
import { jwtConstants } from './constants';
import { User } from './entity/user.entity';
import { JwtStrategy } from './auth/jwt.strategy';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LocalStrategy } from './auth/local.strategy';

@Module({
    imports: [
        SequelizeModule.forFeature([User]), 
        PassportModule,
        UsersModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
    })],
    providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
    exports: [UsersService, AuthService],
    controllers: [UsersController]
})
export class UsersModule {}