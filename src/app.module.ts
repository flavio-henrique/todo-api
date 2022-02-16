import { Module } from '@nestjs/common';
import { TodoController } from './todos/todo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoService } from './todos/todo.service';
import { Todo } from './todos/entity/todo.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pguser',
      password: 'pgpassword',
      database: 'nestjs',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Todo])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class AppModule {}
