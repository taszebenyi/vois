import express from 'express';
import * as postService from '../service/postService.js';
import * as commentService from '../service/commentService.js';
import logger from '../logger.js';
import { idParser } from '../utils/middlewares.js';

const postRouter = express.Router();

postRouter.param('id', idParser(logger));

postRouter.get('/', async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

postRouter.get('/:id', async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.json({ data: post });
  } catch (error) {
    logger.error(error.message);
    res.status(error.message === 'Post not found' ? 404 : 500).json({ error: error.message });
  }
});

postRouter.get('/:id/comments', async (req, res) => {
  try {
    const postComments = await commentService.getCommentsByPostId(req.params.id);
    res.json({ data: postComments });
  } catch (error) {
    logger.error(error.message);
    res.status(error.message === 'No comments found for this post' ? 404 : 500).json({ error: error.message });
  }
});

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
