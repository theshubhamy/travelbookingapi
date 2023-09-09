// reviewRoutes.js

import express from 'express';
import { submitReview, getReviewsForTour } from '../controllers/reviewController';

const router = express.Router();

router.post('/:tourId/reviews', submitReview);
router.get('/:tourId/reviews', getReviewsForTour);

export default router;
