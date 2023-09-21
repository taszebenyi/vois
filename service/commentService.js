import * as commentRepository from '../repository/commentRepository.js';

export const getCommentsByPostId = async (postId) => {
  return await commentRepository.getCommentsByPostId(postId);
};
