import { LibraryService } from './services/library.service';
import { TodoDto } from './todo.dto';
export declare class TodoService {
    private libraryService;
    constructor(libraryService: LibraryService);
    private id;
    private todos;
    list(): TodoDto[];
    post(todoDto: TodoDto): TodoDto;
    get(id: number): TodoDto;
    remove(id: number): void;
    update(todo: TodoDto): TodoDto;
}
