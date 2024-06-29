import express, { Request , Response , NextFunction } from 'express';
import dotenv from 'dotenv'
import cors from "cors";
import cookieParser from "cookie-parser";
import router from './routes'
import { errorHandler } from './utils/errorHandler';

//initialaizing the Env Configurations required for the project
dotenv.config()

const app = express();

const port = process.env.PORT || 3005


//Helper middlewares
app.use( express.json() );
app.use( cookieParser() );


//Adding Cors Security
app.use(
  cors({
    origin: process.env.ACCEPTED_ORGINS ,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

//Routes
app.use('/api', router );


// 404 Not Found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found'
  });
});

// Use error handling middleware
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});