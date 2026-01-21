import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.put('/profile', protectRoute, updateProfile);

router.get('/check', protectRoute, checkAuth);

router.post('/logout', logout);

export default router;
