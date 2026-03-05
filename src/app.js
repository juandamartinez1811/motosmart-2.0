const express = require('express');
const motoRoutes = require('./routes/moto.routes');

const app = express();

app.use(express.json());

app.use('/api/motos', motoRoutes);

module.exports = app;