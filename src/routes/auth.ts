import {Router} from "express";
import {createUser} from "../controllers/auth";

const router = Router();

router.get('/', createUser);

export default router;