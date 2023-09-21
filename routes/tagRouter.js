import express from 'express';
import * as postService from '../service/postService.js';
import logger from '../logger.js';

const tagRouter = express.Router();

/**
 * @swagger
 * /api/tags/{name}:
 *   get:
 *     summary: Retrieve posts by tag name
 *     tags: [Tags]
 *     parameters:
 *       - name: name
 *         in: path
 *         description: The name of the tag to filter posts by
 *     responses:
 *       '200':
 *         description: A list of posts filtered by tag name
 */
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
