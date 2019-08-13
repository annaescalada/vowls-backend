'use strict';

const mongoose = require('mongoose');

// setup mongoose
mongoose.connect('mongodb://localhost/ruquDB', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const Ingredient = require('../models/Ingredient.js');

const seeds = [

  {
    name: 'Arroz integral',
    img: '',
    group: 'Cereals',
    portion: 40
  },
  {
    name: 'Quinoa',
    img: '',
    group: 'Cereals',
    portion: 40
  }

];

Ingredient.create(seeds).then((ingredient) => {
  console.log(ingredient);
  mongoose.connection.close();
}).catch((error) => {
  console.log(error);
});
