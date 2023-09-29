import request from 'supertest';
import app from '../app.js';
import logger from '../logger.js';

describe('Post router integration tests', () => {
  jest.spyOn(logger, 'error').mockImplementation(() => {});
  jest.spyOn(logger, 'info').mockImplementation(() => {});

  describe('GET /api/posts', () => {
    it('should return a list of posts', async () => {
      const res = await request(app).get('/api/posts').expect('Content-Type', /json/).expect(200);

      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe('GET /api/posts/:id', () => {
    it('should return 404 for post not found', async () => {
      const res = await request(app).get('/api/posts/string').expect(400);

      expect(res.body.error).toBe('Invalid ID format');
    });
  });
});
