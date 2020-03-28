import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Sally', email: 'sally@up.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        
        emailService.sendMail({
            to: { 
                name: 'Sally', 
                email: 'sally@up.com'
            },
            message: { 
                subject: 'Bem vinda :)', 
                body: 'Aproveite!'
            }
        });
        
        return res.send();
    }
};