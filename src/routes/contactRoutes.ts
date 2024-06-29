import express from 'express';
import { fetchAccessToken , updateContact } from '../controller/contactsController';

const router = express.Router();

router.get('/fetchAccess', fetchAccessToken );
router.get('/update-contact', updateContact );

export default router;
