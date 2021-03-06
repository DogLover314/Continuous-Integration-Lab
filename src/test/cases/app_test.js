const {expect} = require('../chai')
const request = require('supertest')

const app = require('../../main/app')

describe('GET - /', async () => {

    it('returns hello when listening to 300', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/')

        // check the HTTP status code
        expect(response.statusCode).to.equal(200)
        // check the raw text returned
        expect(response.text).to.equal('Hello World!')
    })

    it('returns goodbye when listening to 400', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/Goodbye')

        // check the HTTP status code
        expect(response.statusCode).to.equal(200)
        // check the raw text returned
        expect(response.text).to.equal('Goodbye World!')
    })

})