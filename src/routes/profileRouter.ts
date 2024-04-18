import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import { updateProfile, getProfile } from "../controllers/profile";
const profileRouter = Router();

profileRouter.patch("/profile", authentication, uploadMiddleware("avatar"), updateProfile);
profileRouter.get("/profile", authentication, getProfile);
profileRouter.get("/profile/:id", authentication, getProfile);

export default profileRouter;