
import { Request, Response } from "express";

import { IUploadMediaService } from "./UploadMedia.interface";

class UploadMediaController {
	constructor(private readonly UploadMediaService: IUploadMediaService) {}

	public async handle(req: Request, res: Response) {
		const result = await this.UploadMediaService.execute();
		res.json(result);
	}
}

export { UploadMediaController };
