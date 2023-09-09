// config/config.js
export default {
    database: {
      dialect: 'mysql', // Change to your database dialect if needed (e.g., postgres)
      username: 'your_db_username',
      password: 'your_db_password',
      database: 'your_db_name',
      host: 'localhost', // Change to your database host if needed
    },
    jwtSecret: 'your-secret-key',
  };
  