import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Food from '../models/Food';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string);

const seeds = [

  {
    name: 'Copos de avena',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/oats_zrsqck.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['breakfast', 'snack']
  },
  {
    name: 'Arroz integral',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/rice_xrq20u.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Quinoa',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/quinoa_phyg4q.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Trigo sarraceno',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565949621/buckwheat_bbnwum.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Noodles de arroz',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/rice-noodles_twggf9.jpg',
    group: 'cereals',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Pasta integral',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/pasta_cbqxra.jpg',
    group: 'cereals',
    portion: 40,
    categories: ['main']
  },
  {
    name: 'Garbanzos',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/garbanzos_tgv75r.jpg',
    group: 'proteins',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Frijoles',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/frijoles_bid9pd.jpg',
    group: 'proteins',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Lentejas',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/lentils_goooy7.jpg',
    group: 'proteins',
    portion: 20,
    categories: ['main']
  },
  {
    name: 'Edamames',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/edamames_q9jopp.jpg',
    group: 'proteins',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Tofu',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/tofu_uc8i89.jpg',
    group: 'proteins',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Seitan',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/seitan_qc6ngh.jpg',
    group: 'proteins',
    portion: 60,
    categories: ['main']
  },
  {
    name: 'Tempeh',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/tempeh_s746gk.jpg',
    group: 'proteins',
    portion: 60,
    categories: ['main']
  },
  {
    name: 'Patata',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/potato_ejpuk3.jpg',
    group: 'tubers',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Boniato',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/boniato_tj37pf.jpg',
    group: 'tubers',
    portion: 150,
    categories: ['main']
  },
  {
    name: 'Brócoli',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948658/brocoli_gxbmdf.jpg',
    group: 'cruciferous',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Coliflor',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/cauliflower_vcuba2.jpg',
    group: 'cruciferous',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Col lombarda',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/red-cabbage_qscnwr.jpg',
    group: 'cruciferous',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Kale',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/kale_o6yv1y.jpg',
    group: 'cruciferous',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Rábano',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/radish_agpb4v.jpg',
    group: 'cruciferous',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Rúcula',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/aurugula_iognqy.jpg',
    group: 'cruciferous',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Espinacas',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/spinach_hypnfu.jpg',
    group: 'greens',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Lechuga',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/lettuce_dhhdop.jpg',
    group: 'greens',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Acelgas',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/chard_mpgqpc.jpg',
    group: 'greens',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Tomate',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/tomato_sqxw78.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Zanahoria',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948658/carrot_sftsu1.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Champiñones',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/champin%CC%83ones_vyehlq.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Remolacha',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/beets_yvebsa.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Pimiento',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/pepper_yyinoi.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Calabaza',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/pumkin_nuxtvt.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Berenjena',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/eggplanrt_dli6my.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },
  {
    name: 'Calabacín',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948662/zuchini_pkyyi0.jpg',
    group: 'othervegs',
    portion: 0,
    categories: ['main']
  },

  {
    name: 'Semillas de lino',
    img: '',
    group: 'omega',
    portion: 10,
    categories: ['breakfast']
  },
  {
    name: 'Semillas de chía',
    img: '',
    group: 'omega',
    portion: 10,
    categories: ['breakfast']
  },
  {
    name: 'Frutos secos',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/nuts_ju05wh.jpg',
    group: 'fat',
    portion: 10,
    categories: ['main', 'breakfast']
  },
  {
    name: 'Aguacate',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948658/avocado_yisycu.jpg',
    group: 'fat',
    portion: 50,
    categories: ['main', 'breakfast']
  },
  {
    name: 'Tahini',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/tahini_b7t0hw.jpg',
    group: 'fat',
    portion: 10,
    categories: ['main', 'breakfast']
  },
  {
    name: 'Aceite de oliva virgen extra',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565949621/oil_ymrdwo.jpg',
    group: 'fat',
    portion: 10,
    categories: ['main']
  },
  {
    name: 'Crema de coco con curry',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/coco-curry_s5ykm8.jpg',
    group: 'salsa',
    portion: 50,
    categories: ['main']
  },
  {
    name: 'Hummus',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/hummus_ifjjpq.jpg',
    group: 'salsa',
    portion: 50,
    categories: ['main']
  },
  {
    name: 'Guacamole',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/guacamole_hlol58.jpg',
    group: 'salsa',
    portion: 50,
    categories: ['main']
  },
  {
    name: 'Mango con aguacate',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948660/mango_sfk4yv.jpg',
    group: 'salsa',
    portion: 50,
    categories: ['main']
  },
  {
    name: 'Crema de anacardos con limón',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948659/cashew_dydhgs.jpg',
    group: 'salsa',
    portion: 50,
    categories: ['main']
  },
  {
    name: 'Tzatziki vegetal',
    img: 'https://res.cloudinary.com/greenstinct/image/upload/v1565948661/tzatziki_sshzjd.jpg',
    group: 'salsa',
    portion: 50,
    categories: ['main']
  },
  {
    name: 'Bebida vegetal',
    img: '',
    group: 'dairy',
    portion: 125,
    categories: ['breakfast']
  },
  {
    name: 'Yogur vegetal',
    img: '',
    group: 'dairy',
    portion: 125,
    categories: ['breakfast']
  },
  {
    name: 'Manzana, plátano, pera, naranja, mandarina, uva, sandía, melón...',
    img: '',
    group: 'fruit',
    portion: 200,
    categories: ['breakfast']
  },
  {
    name: 'Frambuesas, moras, arándanos, fresas, cerezas...',
    img: '',
    group: 'berries',
    portion: 100,
    categories: ['breakfast']
  }
];

Food.insertMany(seeds)
  .then(() => {
    console.log('Seeds inserted successfully');
    mongoose.connection.close();
  })
  .catch((err: any) => {
    console.error('Error inserting seeds:', err);
    mongoose.connection.close();
  });
