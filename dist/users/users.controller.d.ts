import { AuthService } from 'src/auth/auth.service';
export declare class UsersController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(user: any): Promise<void>;
}
