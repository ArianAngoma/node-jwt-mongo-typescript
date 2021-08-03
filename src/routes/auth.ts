import {Router} from "express";
import {signUp, signIn, profile} from "../controllers/auth";
import {validateJWT} from '../middlewares/validate-jwt';

const router = Router();

router.post('/signup', signUp);

router.post('/signin', signIn);

router.get('/profile', [
    validateJWT
], profile);

export default router;