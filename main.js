import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
