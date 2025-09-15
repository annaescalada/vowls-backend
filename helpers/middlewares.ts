import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';

export const isLoggedIn = () => (req: any, res: Response, next: NextFunction) => {
  if (req.session.currentUser) {
    next();
  } else {
    next(createError(401));
  }
};

export const isNotLoggedIn = () => (req: any, res: Response, next: NextFunction) => {
  if (!req.session.currentUser) {
    next();
  } else {
    next(createError(403));
  }
};

export const validationLoggin = () => (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    next(createError(421));
  } else if (!password) {
    next(createError(422));
  } else {
    next();
  }
};

export const validationUpdate = () => (req: Request, res: Response, next: NextFunction) => {
  const { name, age, gender, weight, height, activity, GED, IMC, portion } = req.body;
  if (!name) {
    next(createError(423));
  } else if (!age) {
    next(createError(424));
  } else if (!gender) {
    next(createError(425));
  } else if (!weight) {
    next(createError(426));
  } else if (!height) {
    next(createError(427));
  } else if (!activity) {
    next(createError(428));
  } else if (!portion) {
    next(createError(429));
  } else if (!IMC) {
    next(createError(430));
  } else if (!GED) {
    next(createError(431));
  } else {
    next();
  }
};

export const validationPassword = () => (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    next(createError(432));
  } else {
    next();
  }
};

export const validationVowlSave = () => (req: Request, res: Response, next: NextFunction) => {
  const { name, description, cereal, protein, tuber, cruciferous, greens, othervegs, salsa } = req.body;

  if (!name || !description || !cereal || !protein || !tuber || !cruciferous || !greens || !othervegs || !salsa) {
    next(createError(433));
  } else {
    next();
  }
};

export const validationLastSavedVowl = () => (req: Request, res: Response, next: NextFunction) => {
  const { cereal, protein, tuber, cruciferous, greens, othervegs, salsa } = req.body;
  if (!cereal || !protein || !tuber || !cruciferous || !greens || !othervegs || !salsa) {
    next(createError(434));
  } else {
    next();
  }
};