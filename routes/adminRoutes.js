// adminRoutes.js

import express from 'express';
import { getAllTours, createTour, updateTour, deleteTour } from '../controllers/adminController';

const router = express.Router();

router.get('/tours', getAllTours);
router.post('/tours', createTour);
router.put('/tours/:tourId', updateTour);
router.delete('/tours/:tourId', deleteTour);

export default router;
