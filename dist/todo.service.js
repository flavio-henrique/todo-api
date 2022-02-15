"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const library_service_1 = require("./services/library.service");
let TodoService = class TodoService {
    constructor(libraryService) {
        this.libraryService = libraryService;
        this.id = 0;
        this.todos = [];
    }
    list() {
        return this.todos;
    }
    post(todoDto) {
        this.libraryService.createBook(todo);
        todo.id = ++this.id;
        this.todos.push(todo);
        return todo;
    }
    get(id) {
        return this.todos.find(e => e.id == id);
    }
    remove(id) {
        this.todos.splice(this.todos.findIndex(e => e.id == id), 1);
    }
    update(todo) {
        this.todos.splice(this.todos.findIndex(e => e.id == todo.id), 1);
        return todo;
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [library_service_1.LibraryService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map