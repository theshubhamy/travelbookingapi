// Get a list of all tours for admin management
export const listAllTour = async (req, res) => {
  try {
    const tours = await Tour.findAll();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tours" });
  }
};

// Create a new tour/package
export const createTour = async (req, res) => {
  try {
    // Create a new tour/package here
    // Example: const newTour = await Tour.create({ name: req.body.name, ... });

    res.json({ message: "Tour/package created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating tour/package" });
  }
};

// Update tour/package details
export const updateTourById = async (req, res) => {
  try {
    const { tourId } = req.params;

    // Update tour/package details here
    // Example: const updatedTour = await Tour.update({ name: req.body.name, ... }, { where: { id: tourId } });

    res.json({ message: "Tour/package updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating tour/package" });
  }
};

// Delete a tour/package
export const deleteTourById = async (req, res) => {
  try {
    const { tourId } = req.params;

    await Tour.destroy({ where: { id: tourId } });

    res.json({ message: "Tour/package deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting tour/package" });
  }
};
