import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoService } from './services/todo.service';
import { TodoModel } from './models/todo.model';

@Module({
  imports: [
    AuthModule,
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
  providers: [TodoService]
})
export class AppModule {}
