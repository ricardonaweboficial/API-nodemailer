const express = require('express');
const routes = require('./routes');

const api = express();

api.use(express.json());
api.use(routes);

api.listen(3333);