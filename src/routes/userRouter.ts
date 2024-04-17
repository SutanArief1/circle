import { Router } from "express";
import { login, register, getUsers } from "../controllers/user";
import authentication from "../middleware/authentication";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users",authentication, getUsers);

export default userRouter