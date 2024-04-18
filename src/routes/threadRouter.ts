import {Router} from "express"
import authentication from "../middleware/authentication"
import uploadMiddleware from "../middleware/upload"
import { createThread, getThread, getThreads } from "../controllers/thread"

const threadRouter = Router()

threadRouter.post("/thread", authentication, uploadMiddleware("image"), createThread)
threadRouter.get("/threads", authentication, getThreads);
threadRouter.get("/thread/:id", authentication, getThread);
// threadRouter.get("/replies/:id", authentication, getReplies);

export default threadRouter;