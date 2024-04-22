import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import { updateProfile, getProfile, getProfileById } from "../controllers/profile";
const profileRouter = Router();

profileRouter.patch("/profile", authentication, uploadMiddleware("avatar"), updateProfile);
profileRouter.get("/profile", authentication, getProfile);
profileRouter.get("/profile/:id", authentication, getProfileById);

export default profileRouter;