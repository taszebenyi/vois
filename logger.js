import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}] ${message}`;
});

const logger = createLogger({
  format: combine(colorize(), timestamp(), myFormat),
  transports: [new transports.Console()],
});
export default logger;
