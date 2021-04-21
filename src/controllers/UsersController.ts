import { Request, Response } from 'express';
import { UsersService } from '../services/UserService';

class UsersController {
    async create(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        const usersService = new UsersService();

        const user = await usersService.create(email);

        return res.json(user)
    }

    async showUsers(req: Request, res: Response) {
        const usersService = new UsersService();

        const list = await usersService.listUsers();

        return res.json(list);
    }
}

export { UsersController };