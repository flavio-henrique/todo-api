import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { LibraryService } from './services/library.service';
import { TodoModel } from './models/todo.model';
import { UserModel } from './users/user.model';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'todo',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([TodoModel])
  ],
  controllers: [TodoController],
  providers: [LibraryService]
})
export class AppModule {}
