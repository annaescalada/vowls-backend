import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { isLoggedIn, isNotLoggedIn, validationLoggin, validationUpdate, validationPassword } from '../helpers/middlewares';

// Extend the Request interface to include session with currentUser
export interface AuthenticatedRequest extends Request {
  session: Request['session'] & {
    currentUser?: any;
  };
}

const router = Router();
const saltRounds = 10;

router.get('/me', isLoggedIn(), async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const userID = req.session.currentUser._id;
  try {
    const updatedUser = await User.findById(userID).populate('vowls');
    req.session.currentUser = updatedUser;
  } catch (error) {
    next(error);
  }
  res.json(req.session.currentUser);
});

router.post('/login', isNotLoggedIn(), validationLoggin(), async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ email: username });
    if (!user) {
      next(createError(404));
    } else if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user;
      return res.status(200).json(user);
    } else {
      next(createError(401));
    }
  } catch (error) {
    next(error);
  }
});

router.post('/signup', isNotLoggedIn(), validationLoggin(), async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }, 'username');
    if (user) {
      return next(createError(402));
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ email: username, password: hashPass, completed: false });
      req.session.currentUser = newUser;
      res.status(200).json(newUser);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/logout', isLoggedIn(), (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  req.session.destroy((err: any) => {
    if (err) {
      next(err);
    } else {
      res.status(204).send();
    }
  });
});

router.put('/update', isLoggedIn(), validationUpdate(), async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { name, age, gender, weight, height, activity, GED, IMC, portion } = req.body;
  const newInfo = {
    name,
    age,
    gender,
    weight,
    height,
    activity,
    GED,
    IMC,
    portion,
    completed: true,
  };
  const id = req.session.currentUser._id;
  try {
    await User.findByIdAndUpdate(id, newInfo);
    const newUser = await User.findById(id);
    req.session.currentUser = newUser;
    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.put('/change-password', isLoggedIn(), validationPassword(), async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const id = req.session.currentUser._id;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    await User.findByIdAndUpdate(id, { password: hashedPassword });

    const newUser = await User.findById(id);
    req.session.currentUser = newUser;
    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete', isLoggedIn(), async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const id = req.session.currentUser._id;
  try {
    await User.findByIdAndDelete(id);
    req.session.destroy((err: any) => {
      if (err) {
        next(err);
      } else {
        res.status(204).send();
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router;
