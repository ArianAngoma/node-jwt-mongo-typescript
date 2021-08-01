import {Router} from "express";
import {signUp, signIn, profile} from "../controllers/auth";

const router = Router();

router.post('/signup', signUp);

router.post('/signin', signIn);

router.get('/profile', profile);

export default router;