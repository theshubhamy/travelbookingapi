// Retrieve a user's booking history
export const getUserBooking = async (req, res) => {
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
export const updateUserBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { date } = req.body;

    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Perform the necessary modifications to the booking

    // For demonstration purposes, we update the date only
    booking.date = date || booking.date;
    await booking.save();

    res.json({ message: "Booking updated successfully", booking });
  } catch (error) {
    res.status(500).json({ error: "Error updating booking" });
  }
};

// Cancel a booking
export const cancelUserBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Perform the necessary cancellation actions here

    // For demonstration purposes, we just destroy the booking
    await booking.destroy();

    res.json({ message: "Booking canceled successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error canceling booking" });
  }
};
