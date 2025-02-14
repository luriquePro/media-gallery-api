import { Router } from "express";
import { UploadMediaController } from "../usecases/Media/UploadMedia/UploadMedia.controller";
import { UploadMediaService } from "../usecases/Media/UploadMedia/UploadMedia.service";

const mediaRouter = Router();

const uploadMediaService = new UploadMediaService();
const uploadMediaController = new UploadMediaController(uploadMediaService);

mediaRouter.post("/upload",uploadMediaController.handle.bind(uploadMediaController))

const mediaRoutes = { key: "/media", routes: mediaRouter };
export { mediaRoutes };
