import fs from 'fs/promises';
import path from 'path';

const __dirname = path.join(process.cwd());

export const fetchComments = async () => {
  const data = await fs.readFile(path.join(__dirname, 'data/comments.json'), 'utf-8');
  return JSON.parse(data);
};
