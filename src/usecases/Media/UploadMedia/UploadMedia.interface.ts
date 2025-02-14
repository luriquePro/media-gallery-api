export interface IUploadMediaService {
	execute(): Promise<{ error: boolean; message: string }>
}
