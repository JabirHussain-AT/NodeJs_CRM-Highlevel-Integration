import express from 'express';
import contactRoutes from './contactRoutes';
import authRoutes from './authRoutes'

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/auth', authRoutes);


export default router;
