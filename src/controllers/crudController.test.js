const request = require('supertest');
const app = require('../app.js');

beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
 });

describe("Crud Controler", () =>{

    it("Deve retornar 400 se parâmetros inválidos", async()=>{
        const response = await request(app).post('/create').send({});

        const response_expected = {
            error: 'Invalid params'
        }

        expect(response_expected).toEqual({
            error: 'Invalid params'
        })

    })
});