const fastify = require('fastify');
const UserController = require('./controller');

module.exports = async (fastify, _opts) => {
    fastify.post('/register', UserController.register);
    fastify.post('/login', UserController.login);
}