const express = require('express')
const app = express();

require('./config/mongoose.config')


app.use(express.json(),express.urlencoded({extended: true}));

const AllMyRoutes = require('./routes/joke.routes');

AllMyRoutes(app)


const portNumber= 8000;

app.listen(portNumber, () => console.log(`Server connected on port ${portNumber}`))