import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import postRouter from './routes/postRouter.js';
import tagRouter from './routes/tagRouter.js';
import { __dirname } from './utils/dirnameUtil.js';
import { errorHandler } from './utils/middlewares.js';

config();

const app = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/posts', postRouter);
app.use('/api/tags', tagRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
