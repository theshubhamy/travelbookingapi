// bookingRoutes.js

import express from 'express';
import { getBookingDetails, getUserBookings, updateBooking, cancelBooking } from '../controllers/bookingController';

const router = express.Router();

router.get('/:bookingId', getBookingDetails);
router.get('/users/:userId', getUserBookings);
router.put('/:bookingId', updateBooking);
router.delete('/:bookingId', cancelBooking);

export default router;
