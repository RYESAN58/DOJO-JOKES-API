const jokeController = require('../controllers/joke.controller')
const JokeController = require('../controllers/joke.controller')
const Joke = require('../models/joke.model')


module.exports = (app) => {
    app.post('/api/jokes', JokeController.createNewJoke)

    app.get('/api/jokes', JokeController.getAllJokes)

    app.get('/ai/jokes/:id', JokeController.findCertainJoke)

    app.delete('/api/jokes/:id', jokeController.deleteOne)
}