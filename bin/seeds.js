'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

// setup mongoose
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const Ingredient = require('../models/Ingredient.js');

const seeds = [

  {
    name: 'Copos de avena',
    img: './ingredients/oats.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['breakfast', 'snack']
  },
  {
    name: 'Arroz integral',
    img: '/ingredients/rice.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Quinoa',
    img: '/ingredients/quinoa.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Trigo sarraceno',
    img: '',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Noodles de arroz',
    img: '/ingredients/rice-noodles.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Pasta integral',
    img: './ingredients/pasta.jpg',
    group: 'cereals',
    portion: 40,
    categories: ['main']
  },
  {
    name: 'Garbanzos',
    img: './ingredients/garbanzos.jpg',
    group: 'proteins',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Frijoles',
    img: './ingredients/frijoles.jpg',
    group: 'proteins',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Lentejas',
    img: './ingredients/lentils.jpg',
    group: 'proteins',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Edamames',
    img: './ingredients/edamames.jpg',
    group: 'proteins',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Tofu',
    img: './ingredients/tofu.jpg',
    group: 'proteins',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Seitan',
    img: './ingredients/seitan.jpg',
    group: 'proteins',
    portion: 60,
    categories: ['main']
  },
  {
    name: 'Tempeh',
    img: './ingredients/tempeh.jpg',
    group: 'proteins',
    portion: 60,
    categories: ['main']
  },
  {
    name: 'Patata',
    img: './ingredients/potato.jpg',
    group: 'tubers',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Boniato',
    img: './ingredients/boniato.jpg',
    group: 'tubers',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Brócoli',
    img: './ingredients/brocoli.jpg',
    group: 'cruciferous',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Coliflor',
    img: './ingredients/cauliflower.jpg',
    group: 'cruciferous',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Col lombarda',
    img: './ingredients/red-cabbage.jpg',
    group: 'cruciferous',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Kale',
    img: './ingredients/kale.jpg',
    group: 'cruciferous',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Rábano',
    img: './ingredients/radish.jpg',
    group: 'cruciferous',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Rúcula',
    img: './ingredients/aurugula.jpg',
    group: 'cruciferous',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Espinacas',
    img: './ingredients/spinach.jpg',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Lechuga',
    img: './ingredients/lettuce.jpg',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Acelgas',
    img: './ingredients/chard.jpg',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },




  {
    name: 'Tomate',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Zanahoria',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Champilñones',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Remolacha',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Pimiento',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Pimiento',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  {
    name: 'Pimiento',
    img: '',
    group: 'greens',
    portion: 100,
    categories: ['main']
  },
  

];

Ingredient.create(seeds).then((ingredient) => {
  console.log(ingredient);
  mongoose.connection.close();
}).catch((error) => {
  console.log(error);
});
