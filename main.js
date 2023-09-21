import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import postRouter from './routes/postRouter.js';
import tagRouter from './routes/tagRouter.js';
import { errorHandler } from './utils/middlewares.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerOptions.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

config();

const app = express();
const specs = swaggerJsDoc(swaggerOptions);
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/posts', postRouter);
app.use('/api/tags', tagRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
