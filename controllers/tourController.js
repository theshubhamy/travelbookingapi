// Get a list of available tours and packages
export const listAllTour = async (req, res) => {
  try {
    const tours = await Tour.findAll();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tours" });
  }
};

// Get details for a specific tour/package
export const getBookingDetail = async (req, res) => {
  try {
    const { tourId } = req.params;
    const tour = await Tour.findByPk(tourId);

    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tour details" });
  }
};

// Create a booking for a tour
export const createBooking = async (req, res) => {
  try {
    const { tourId } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      date,
      userId: req.userId,
      tourId,
    });

    res.json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ error: "Error creating booking" });
  }
};

// Retrieve a user's booking history
export const listUserBooking = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.findAll({
      where: { userId },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving booking history" });
  }
};

// Modify a booking (e.g., change dates)
export const updateBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { date } = req.body;

    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    booking.date = date || booking.date;
    await booking.save();

    res.json({ message: "Booking updated successfully", booking });
  } catch (error) {
    res.status(500).json({ error: "Error updating booking" });
  }
};

// Cancel a booking
export const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await booking.destroy();
    res.json({ message: "Booking canceled successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error canceling booking" });
  }
};
