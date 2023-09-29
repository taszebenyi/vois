import * as commentService from '../service/commentService.js';
import * as commentRepository from '../repository/commentRepository.js';
import { mockComments } from '../mocks/mockComments.js';

jest.mock('../repository/commentRepository.js');

describe('commentService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch comments by post ID', async () => {
    commentRepository.getCommentsByPostId.mockResolvedValueOnce(mockComments);

    const result = await commentService.getCommentsByPostId(1);

    expect(result).toEqual(mockComments);
    expect(commentRepository.getCommentsByPostId).toHaveBeenCalledWith(1);
    expect(commentRepository.getCommentsByPostId).toHaveBeenCalledTimes(1);
  });

  it('should return an empty array if no comments are found for the post', async () => {
    commentRepository.getCommentsByPostId.mockResolvedValueOnce(mockComments[1].comments);

    const result = await commentService.getCommentsByPostId(2);

    expect(result).toEqual([]);
    expect(commentRepository.getCommentsByPostId).toHaveBeenCalledWith(2);
  });
});
