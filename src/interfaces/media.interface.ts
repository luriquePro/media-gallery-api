import { ModelMongoTimestamp } from "./app.interface";
import { ICategoryLimits } from "./category.interface";

interface IMediaDTO extends ModelMongoTimestamp {
	name: string;
	originalName: string;
	extension: MediaExtension;
	size: number;
	type: MediaType;
	category: ICategory;
	content_hash: string;
	width: number;
	height: number;
	formattedSize: string;
}

interface ICategory {
	name: string;
	order: number;
	limits?: ICategoryLimits;
}

enum MediaType {
	IMAGE = "image",
	VIDEO = "video",
	AUDIO = "audio",
	DOCUMENT = "document",
}

enum MediaExtension {
	// Imagens
	JPG = "jpg",
	JPEG = "jpeg",
	PNG = "png",
	GIF = "gif",
	WEBP = "webp",
	SVG = "svg",
	BMP = "bmp",
	TIFF = "tiff",
	HEIC = "heic",

	// Vídeos
	MP4 = "mp4",
	MKV = "mkv",
	AVI = "avi",
	MOV = "mov",
	WMV = "wmv",
	FLV = "flv",
	WEBM = "webm",

	// Áudios
	MP3 = "mp3",
	WAV = "wav",
	FLAC = "flac",
	OGG = "ogg",
	AAC = "aac",
	M4A = "m4a",

	// Documentos
	PDF = "pdf",
	DOC = "doc",
	DOCX = "docx",
	XLS = "xls",
	XLSX = "xlsx",
	PPT = "ppt",
	PPTX = "pptx",
	TXT = "txt",
	CSV = "csv",
	JSON = "json",
	XML = "xml",
}

export { IMediaDTO, MediaExtension, MediaType };
