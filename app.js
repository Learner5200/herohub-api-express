const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const heroRoutes = require('./api/routes/heroes');

// Logs requests/responses to console
app.use(morgan('dev'));

// Allows easy access to body of request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/heroes', heroRoutes);

app.get('/', (req, res) => res.json({ message: 'HELLO WORLD' }));

app.listen(1234, () => console.log('Listening on 1234'));
