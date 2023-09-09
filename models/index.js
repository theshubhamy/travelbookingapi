// models/index.js
import User from './User';
import Tour from './Tour';
import Booking from './Booking';
import Review from './Review';

// Define associations here

// User associations
User.hasMany(Booking, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });
User.hasMany(Payment, { foreignKey: 'userId' });

// Tour associations
Tour.hasMany(Booking, { foreignKey: 'tourId' });
Tour.hasMany(Review, { foreignKey: 'tourId' });

// Booking associations
Booking.belongsTo(User, { foreignKey: 'userId' });
Booking.belongsTo(Tour, { foreignKey: 'tourId' });
Booking.hasOne(Payment, { foreignKey: 'bookingId' });

// Payment associations
Payment.belongsTo(User, { foreignKey: 'userId' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId' });

// Review associations
Review.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(Tour, { foreignKey: 'tourId' });

export { User, Tour, Booking, Payment, Review };
