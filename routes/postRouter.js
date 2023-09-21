import express from 'express';
import * as postService from '../service/postService.js';
import * as commentService from '../service/commentService.js';
import logger from '../logger.js';
import { idParser } from '../utils/middlewares.js';

const postRouter = express.Router();

postRouter.param('id', idParser(logger));

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retrieve all posts
 *     tags: [Posts]
 *     responses:
 *       '200':
 *         description: A list of posts
 */
postRouter.get('/', async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.json({ data: posts });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Numeric ID of the post to retrieve
 *     responses:
 *       '200':
 *         description: A single post
 *       '404':
 *         description: Post not found
 */
postRouter.get('/:id', async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.json({ data: post });
  } catch (error) {
    logger.error(error.message);
    res.status(error.message === 'Post not found' ? 404 : 500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/posts/{id}/comments:
 *   get:
 *     summary: Retrieve comments for a post by post ID
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Numeric ID of the post to retrieve comments for
 *     responses:
 *       '200':
 *         description: A list of comments for the post
 */
postRouter.get('/:id/comments', async (req, res) => {
  try {
    const postComments = await commentService.getCommentsByPostId(req.params.id);
    res.json({ data: postComments });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/posts/tags/{tag}:
 *   get:
 *     summary: Retrieve posts by tag
 *     tags: [Posts]
 *     parameters:
 *       - name: tag
 *         in: path
 *         description: The tag to filter posts by
 *     responses:
 *       '200':
 *         description: A list of posts filtered by tag
 */
postRouter.get('/tags/:tag', async (req, res) => {
  try {
    const posts = await postService.getPostsByTag(req.params.tag);
    res.json({ data: posts });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default postRouter;
