import { Router } from 'express';
import User from '../models/User';
import { isLoggedIn } from '../helpers/middlewares';

const router = Router();

router.put('/save', isLoggedIn(), async (req: any, res, next) => {
  try {
    const { newMeals } = req.body;
    const userID = req.session.currentUser._id;
    await User.findByIdAndUpdate(userID, { meals: newMeals });
    const updatedUser = await User.findById(userID).populate('vowls');
    req.session.currentUser = updatedUser;
    res.json({ updatedUser });
  } catch (error) {
    next(error);
  }
});

export default router;
