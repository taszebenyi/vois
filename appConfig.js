import rateLimit from 'express-rate-limit';

export const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 204,
};

export const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 1000,
});
