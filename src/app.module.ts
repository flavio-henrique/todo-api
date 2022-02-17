import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER || 'pguser',
      password: process.env.DATABASE_PASS || 'pgpassword',
      database: process.env.DATABASE_DB || 'nestjs',
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    TodosModule,
  ]
})
export class AppModule {}
