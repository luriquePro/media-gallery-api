import { IUploadMediaService } from "./UploadMedia.interface";

class UploadMediaService implements IUploadMediaService {
	public async execute() {
		return {
			error: false,
			message: "Upload realizado com sucesso",
		};
	}
}

export { UploadMediaService };
