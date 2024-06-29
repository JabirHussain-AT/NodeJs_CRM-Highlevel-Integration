import { Request , Response , NextFunction } from "express";


// error handling middleware
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);  // Log error stack to console
  
    res.status(500).json({
      status: 'error',
      message: err.message || 'An unexpected error occurred'
    });
  };
  