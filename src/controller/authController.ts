import { Request, Response, NextFunction } from 'express';
import getInitialCode from '../helper/getInitalCode';

export const login = (req: Request, res: Response, next: NextFunction): void => {
    getInitialCode()
        .then(response => {
            if (response) {
                res.status(200).json({ message: 'success' });
            } else {
                const error = new Error('Failed to get initial code');
                (error as any).statusCode = 400;
                throw error;
            }
        })
        .catch(next);
};