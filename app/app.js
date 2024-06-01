const fastify = require('fastify');

const app = fastify();

const mongoose = require('mongoose');

// const url = "mongodb+srv://admin:<Gosala@1>@testcluster.4gzlzzz.mongodb.net/";

const uri = 'mongodb+srv://chenna:chenna@testcluster.4gzlzzz.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });




app.get('/', async (request, reply) => {
    reply.code(200).send({ message: 'Hello, world!' });
    return {
        message:"Server is ready and running"
    }

});

app.register(require('./auth/route'),{
    prefix:'/auth'
});

module.exports = app;