import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const fetchPosts = async () => {
  const data = await fs.readFile(path.join(__dirname, '../data/posts.json'), 'utf-8');
  return JSON.parse(data);
};
