import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { TodoDto } from "./dto/todo.dto";
import { Todo } from "./entity/todo.entity";

@Injectable()
export class TodosService {
    constructor(
        @InjectModel(Todo)
        private todo: typeof Todo
    ) {}

    async findAll(): Promise<Array<TodoDto>> {
        const users = await this.todo.findAll();
        return users.map(e => new TodoDto(e.get()));
    }

    async findOne(id: string): Promise<TodoDto> {
        const todo = await this.todo.findOne({
            where: {
                id,
            },
        });
        if (!todo) {
            throw new HttpException(
                'Todo with given id not found',
                HttpStatus.NOT_FOUND,
            );
        }
        return new TodoDto(todo.get());
    }

    delete(id: string): Promise<number>{
        return this.todo.destroy({
            where: {
                id,
            },
        });
    }

    async create(todoDto: TodoDto): Promise<TodoDto> {
        const todo = await this.todo.create({
            title: todoDto.title,
            description: todoDto.description});
        return new TodoDto(todo)
    }

    async update(todoDto: TodoDto): Promise<TodoDto> {

        const todo = await this.todo.findOne({
            where: {
                id: todoDto.id,
            },
        });
        if (!todo) {
            throw new HttpException(
                'Todo with given id not found',
                HttpStatus.NOT_FOUND,
            );
        }

     
        todo.set({
            id: todo.id,
            title: todo.title,
            description: todo.description
        });
        todo.save();
        return new TodoDto(todo.get());
    }
}