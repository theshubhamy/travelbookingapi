// models/Tour.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Tour = sequelize.define('Tour', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Add other required fields here
});

export default Tour;
