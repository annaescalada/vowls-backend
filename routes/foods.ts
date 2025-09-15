import { Router } from 'express';
import Food from '../models/Food';
import { isLoggedIn } from '../helpers/middlewares';

const router = Router();

router.get('/all', isLoggedIn(), async (req, res, next) => {
  try {
    const foods = await Food.find();
    res.json({ foods });
  } catch (error) {
    next(error);
  }
});

export default router;
