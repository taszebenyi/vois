import { fetchComments } from '../utils/fetchComments.js';

export const getComments = async () => {
  try {
    return await fetchComments();
  } catch (error) {
    throw new Error(`Could not fetch comments: ${error.message}`);
  }
};

export const getCommentsByPostId = async (postId) => {
  const comments = await getComments();

  const result = comments.find((commentObj) => commentObj.post_id === postId);
  return result.comments;
};
