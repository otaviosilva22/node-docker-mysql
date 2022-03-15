const request = require('supertest');
const app = require('../app.js');
const { users } = require('../models/users');

beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
 });

describe("Crud Controler Tests", () =>{

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

    it("Deve retornar 200 com os parâmetros válidos para create", async()=>{
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
        expect(response.statusCode).toBe(200);
    })

    it("Deve retornar 200 com os parâmetros válidos para update", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'update').mockImplementation(()=> new Promise((resolve) => resolve([1])))

        let response_expected = {
            result: 'Update successfuly'
        }

        let response = await request(app).post('/update').send({"name": "teste", "email": "teste@mail.com"})
        expect(response.body).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

    it("Deve retornar 200 com os parâmetros válidos para delete", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'destroy').mockImplementation(()=> new Promise((resolve) => resolve({
            deleted: true
        })))

        let response_expected = {
            result: 'User deleted!'
        }

        let response = await request(app).post('/delete').send({"email": "teste@mail.com"})
        expect(response.body).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

    it("Deve retornar 200 com os parâmetros válidos para read", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'findOne').mockImplementation(()=> new Promise((resolve) => resolve({
            result: true
        })))

        let response_expected = {
            result:true
        }

        let response = await request(app).get('/read?email=teste@mail.com');
        console.log("AQUI", response.body)
        expect(response.body.result).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

});