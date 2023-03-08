import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { LibraryModuleConfig } from '../src';

describe('Application e2e test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule(
      LibraryModuleConfig,
    ).compile();
    app = module.createNestApplication(undefined, {
      logger: ['error', 'warn'],
    });
    await app.init();
  }, 30000);

  afterAll(async () => {
    await app.close();
  });

  describe('GET /', () => {
    test('should redirect to swagger api', async () => {
      const res = await request(app.getHttpServer()).get('/');
      expect(res.status).toBe(404);
      expect(res.header.location).toBe(undefined);
    });
  });
});
