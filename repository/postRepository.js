import { fetchPosts } from '../utils/fetchPosts.js';

export const getPosts = async () => {
  try {
    return await fetchPosts();
  } catch (error) {
    throw new Error(`Could not fetch posts: ${error.message}`);
  }
};

export const getPostById = async (id) => {
  const posts = await getPosts();
  return posts.find((post) => post.id === id);
};
