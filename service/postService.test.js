import * as postService from '../service/postService.js';
import * as postRepository from '../repository/postRepository.js';
import { mockPosts } from '../mocks/mockPosts.js';

jest.mock('../repository/postRepository.js');

describe('postService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all posts', async () => {
    postRepository.getPosts.mockResolvedValueOnce(mockPosts);

    const result = await postService.getPosts();

    expect(result).toEqual(mockPosts);
    expect(postRepository.getPosts).toHaveBeenCalledTimes(1);
  });

  it('should fetch post by ID', async () => {
    postRepository.getPostById.mockResolvedValueOnce(mockPosts[0]);

    const result = await postService.getPostById(1);

    expect(result).toEqual(mockPosts[0]);
    expect(postRepository.getPostById).toHaveBeenCalledWith(1);
  });

  it('should fetch posts by tag', async () => {
    postRepository.getPosts.mockResolvedValueOnce(mockPosts);

    const result = await postService.getPostsByTag('rally');

    expect(result).toEqual([mockPosts[0]]);
  });

  it('should throw error when post not found', async () => {
    postRepository.getPostById.mockResolvedValueOnce(null);

    await expect(postService.getPostById(1)).rejects.toThrow('Post not found');
  });

  it('should throw error when no post by tag is found', async () => {
    postRepository.getPostById.mockResolvedValueOnce(null);

    await expect(postService.getPostsByTag('unknownTag')).rejects.toThrow('No posts found for this tag');
  });
});
