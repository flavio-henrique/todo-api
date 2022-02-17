import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'pgsql',
      port: 5432,
      username: 'pguser',
      password: 'pgpassword',
      database: 'nestjs',
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    TodosModule,
  ]
})
export class AppModule {}
