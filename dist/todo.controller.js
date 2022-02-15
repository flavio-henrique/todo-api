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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_dto_1 = require("./todo.dto");
const auth_service_1 = require("./auth/auth.service");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const library_service_1 = require("./services/library.service");
let TodoController = class TodoController {
    constructor(authService, libraryService) {
        this.authService = authService;
        this.libraryService = libraryService;
    }
    async getById(params, response) {
        const todo = await (await this.libraryService.findOne(params.id)).get();
        return response.status(common_1.HttpStatus.OK).json(Object.assign({}, todo));
    }
    async list(response) {
        const todos = await this.libraryService.findAll();
        return response.status(common_1.HttpStatus.OK).json([...todos]);
    }
    async postTodo(todoDto, response) {
        const todoModel = await this.libraryService.create(todoDto);
        return response.status(common_1.HttpStatus.CREATED).json(Object.assign({}, todoModel.get()));
    }
    async delete(params, response) {
        const rowsDeleted = await this.libraryService.delete(params.id);
        return response.status(common_1.HttpStatus.OK).json({
            rowsDeleted
        });
    }
    async put(todoDto, response) {
        const todo = await this.libraryService.update(todoDto);
        if (!todo) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                error: "Not Found"
            });
        }
        return response.status(common_1.HttpStatus.CREATED).json(Object.assign({}, todo.get()));
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "list", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('todos'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoDto, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "postTodo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('todos/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('todos/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoDto, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "put", null);
TodoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        library_service_1.LibraryService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map