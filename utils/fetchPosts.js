import fs from 'fs/promises';
import path from 'path';
import { __dirname } from './dirnameUtil.js';

export const fetchPosts = async () => {
  const data = await fs.readFile(path.join(__dirname, '../data/posts.json'), 'utf-8');
  return JSON.parse(data);
};
