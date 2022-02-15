import { TodoDto } from './todo.dto';
import { AuthService } from './auth/auth.service';
import { LibraryService } from './services/library.service';
export declare class TodoController {
    private authService;
    private libraryService;
    constructor(authService: AuthService, libraryService: LibraryService);
    getById(params: any, response: any): Promise<any>;
    list(response: any): Promise<any>;
    postTodo(todoDto: TodoDto, response: any): Promise<any>;
    delete(params: any, response: any): Promise<any>;
    put(todoDto: TodoDto, response: any): Promise<any>;
}
