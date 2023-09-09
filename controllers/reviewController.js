// Submit a review and rating for a tour
export const postTourReviews = async (req, res) => {
  try {
    const { tourId } = req.params;
    const { rating, comment } = req.body;

    const review = await Review.create({
      rating,
      comment,
      userId: req.userId,
      tourId,
    });

    res.json({ message: "Review submitted successfully", review });
  } catch (error) {
    res.status(500).json({ error: "Error submitting review" });
  }
};

// Get reviews and ratings for a tour
export const listTourReviews = async (req, res) => {
  try {
    const { tourId } = req.params;
    const reviews = await Review.findAll({
      where: { tourId },
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving reviews" });
  }
};
