import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { TodoModel } from "src/models/todo.model";
import { TodoDto } from "src/todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(TodoModel)
        private todoModel: typeof TodoModel
    ) {}

    async findAll(): Promise<TodoModel[]> {
        return this.todoModel.findAll();
    }

    findOne(id: string): Promise<TodoModel> {
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

    async create(todo: TodoDto): Promise<TodoModel> {
        return this.todoModel.create({
            title: todo.title,
            description: todo.description});
    }

    async update(todo: TodoDto): Promise<TodoModel> {
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