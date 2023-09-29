import * as postRepository from '../repository/postRepository.js';

export const getPosts = async () => {
  return await postRepository.getPosts();
};

export const getPostById = async (id) => {
  const post = await postRepository.getPostById(id);

  if (!post) {
    throw new Error('Post not found');
  }

  return post;
};

export const getPostsByTag = async (tag) => {
  const allPosts = await postRepository.getPosts();
  const filteredPosts = allPosts?.filter((post) => post.tags.includes(tag));

  if (!filteredPosts || filteredPosts?.length === 0) {
    throw new Error('No posts found for this tag');
  }

  return filteredPosts;
};
