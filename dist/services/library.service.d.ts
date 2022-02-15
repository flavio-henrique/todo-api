import { TodoModel } from "src/models/todo.model";
import { TodoDto } from "src/todo.dto";
export declare class LibraryService {
    private todoModel;
    constructor(todoModel: typeof TodoModel);
    findAll(): Promise<TodoModel[]>;
    findOne(id: string): Promise<TodoModel>;
    delete(id: string): Promise<number>;
    create(todo: TodoDto): Promise<TodoModel>;
    update(todo: TodoDto): Promise<TodoModel>;
}
