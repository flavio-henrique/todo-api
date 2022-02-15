import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UserModel } from './user.model';
import { UsersController } from '../auth/auth.controller';
import { UsersService } from './users.service';

@Module({
    imports: [SequelizeModule.forFeature([UserModel])],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}