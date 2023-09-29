import request from 'supertest';
import app from '../app.js';
import logger from '../logger.js';

describe('Tag router integration tests', () => {
  jest.spyOn(logger, 'error').mockImplementation(() => {});
  jest.spyOn(logger, 'info').mockImplementation(() => {});

  describe('GET /api/tags/:name', () => {
    it('should return posts based on specified tag', async () => {
      const res = await request(app).get('/api/tags/rally').expect('Content-Type', /json/).expect(200);

      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });
});
