import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Todo } from "./entity/todo.entity";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";

@Module({
    imports: [
      SequelizeModule.forFeature([Todo])
    ],
    controllers: [TodosController],
    providers: [TodosService]
  })
  export class TodosModule {}