// Retrieve user profile information
export const listUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving user profile" });
  }
};

// Update user profile details
export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.json({ message: "User profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Error updating user profile" });
  }
};

// Delete a user account
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();
    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user account" });
  }
};
