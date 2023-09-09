import jwt from 'jsonwebtoken';
import config from '../config';

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    req.userId = decoded.userId;
    req.userRole = decoded.userRole;
    next();
  });
};

export default authenticateToken;
