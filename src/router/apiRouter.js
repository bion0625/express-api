import express from "express";
import { createComment, registerView } from "../controllers/videoController";
import { createTextComment, deleteComment } from "../controllers/commentController";
import { textApi } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiRouter.post("/texts/:id([0-9a-f]{24})/comment", createTextComment);
apiRouter.delete("/comment/:id([0-9a-f]{24})/delete", deleteComment);

apiRouter.get("/text/:id", textApi);


export default apiRouter;