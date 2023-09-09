// tourRoutes.js

import express from 'express';
import { getTours, getTourDetails } from '../controllers/tourController';

const router = express.Router();

router.get('/', getTours);
router.get('/:tourId', getTourDetails);

export default router;
