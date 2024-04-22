import {Router} from "express"
import authentication from "../middleware/authentication"
import uploadMiddleware from "../middleware/upload"
import { createThread, deleteThread, getReplies, getThread, getThreads } from "../controllers/thread"

const threadRouter = Router()

threadRouter.post("/thread", authentication, uploadMiddleware("image"), createThread)
threadRouter.get("/threads", getThreads);
threadRouter.get("/thread/:id", getThread);
threadRouter.delete("/thread/:id", authentication, deleteThread);
threadRouter.get("/replies/:id", authentication, getReplies);

export default threadRouter;