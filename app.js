const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => res.json({ message: 'HELLO WORLD' }));


app.listen(1234, () => console.log('Listening on 1234'));
