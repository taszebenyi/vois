import express from 'express';
import * as postService from '../service/postService.js';
import logger from '../logger.js';

const tagRouter = express.Router();

tagRouter.get('/:name', async (req, res) => {
  try {
    const posts = await postService.getPostsByTag(req.params.name);
    res.json({ data: posts });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default tagRouter;
