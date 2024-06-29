import express from 'express';
import { login } from '../controller/authController';

const router = express.Router();

router.get('/login-highlevel', login );

export default router;
