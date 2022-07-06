import { supertest } from './testServer';
import { describe, expect, test } from '@jest/globals';

describe('API CALLS', () => {
  //No need to set port

  it('Started testing', () => {
    expect(true).toBe(true);
  });

  describe('Entry point should quack', () => {
    test('Entry point', async () => {
      const response = await supertest.get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('🦆🦆🦆🦆🦆Quack Quack Quack🦆🦆🦆🦆🦆');
    });
  });
});
