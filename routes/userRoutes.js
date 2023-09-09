// userRoutes.js

import express from 'express';
import { getUserProfile, updateUserProfile, deleteUserAccount } from '../controllers/userController';

const router = express.Router();

router.get('/:userId', getUserProfile);
router.put('/:userId', updateUserProfile);
router.delete('/:userId', deleteUserAccount);

export default router;
