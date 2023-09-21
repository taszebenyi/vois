import * as commentRepository from '../repository/commentRepository.js';

export const getCommentsByPostId = async (postId) => {
  const comments = await commentRepository.getCommentsByPostId(postId);

  if (!comments || comments.length === 0) {
    throw new Error('No comments found for this post');
  }

  return comments;
};
