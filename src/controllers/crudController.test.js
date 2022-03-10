const request = require('supertest');
const app = require('../app.js');
const { users } = require('../models/users');

beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
 });

describe("Crud Controler", () =>{

    it("Deve retornar 400 se parâmetros inválidos", async()=>{
        let response = await request(app).post('/create').send({});
        expect(response.statusCode).toBe(400);
    
        response = await request(app).post('/update').send({}); 
        expect(response.statusCode).toBe(400);

        response = await request(app).post('/delete').send({}); 
        expect(response.statusCode).toBe(400);

        response = await request(app).get('/read'); 
        expect(response.statusCode).toBe(400);
    
    });

    it("Deve retornar 200 com os parâmetros válidos", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'create').mockImplementation(()=> new Promise((resolve) => resolve({
            create: true
        })))

        let response_expected = {
            success: true, 
            statusCode: 200,
            result: {
                create: true
            }
        }

        let response = await request(app).post('/create').send({"name": "teste", "email": "teste@mail.com"})
        expect(response.body).toEqual(response_expected);
    })
});