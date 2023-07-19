import request from 'supertest';
import { app } from '../app';
import { it, expect, describe } from 'vitest';

describe('Check routes', () => {    
    it('Check if API working', async () => {
        const response = await request(app).get('/');
    
        expect(response.text).toBe('Hello World');
    });
});