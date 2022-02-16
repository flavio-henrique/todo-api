import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "src/todos/entity/todo.entity";
import { TodoDto } from "src/todos/dto/todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo)
        private todoModel: typeof Todo
    ) {}

    async findAll(): Promise<Todo[]> {
        return this.todoModel.findAll();
    }

    findOne(id: string): Promise<Todo> {
        return this.todoModel.findOne({
            where: {
                id,
            },
        });
    }

    delete(id: string) {
        return this.todoModel.destroy({
            where: {
                id,
            },
        });
    }

    async create(todo: TodoDto): Promise<Todo> {
        return this.todoModel.create({
            title: todo.title,
            description: todo.description});
    }

    async update(todo: TodoDto): Promise<Todo> {
        const todoModel = await this.findOne(todo.id);
        if (!todoModel) return todoModel;
        
        todoModel.set({
            id: todo.id,
            title: todo.title,
            description: todo.description
        });
        todoModel.save();
        return todoModel;
    }
}