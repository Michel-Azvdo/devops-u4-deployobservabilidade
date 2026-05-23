const request = require ('supertest');
const app = require ('../server');

describe('teste da API', () => {
    test ('GET / deve retornar status online', async () => {
        
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('online');
    });
});