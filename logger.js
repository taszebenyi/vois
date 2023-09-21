import winston from 'winston';

const env = process.env.NODE_ENV || 'development';

const logger = winston.createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

export default logger;
