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
	TEXT = "text",
}

enum MediaImageExtension {
	JPG = "jpg",
	JPEG = "jpeg",
	PNG = "png",
	GIF = "gif",
	WEBP = "webp",
	SVG = "svg",
	BMP = "bmp",
	TIFF = "tiff",
	HEIC = "heic",
}

enum MediaVideoExtension {
	MP4 = "mp4",
	MKV = "mkv",
	AVI = "avi",
	MOV = "mov",
	WMV = "wmv",
	FLV = "flv",
	WEBM = "webm",
}

enum MediaAudioExtension {
	MP3 = "mp3",
	WAV = "wav",
	FLAC = "flac",
	OGG = "ogg",
	AAC = "aac",
	M4A = "m4a",
}

enum MediaTextExtension {
	TXT = "txt",
}

enum MediaDocumentExtension {
	PDF = "pdf",
	DOC = "doc",
	DOCX = "docx",
	XLS = "xls",
	XLSX = "xlsx",
	PPT = "ppt",
	PPTX = "pptx",
	CSV = "csv",
	JSON = "json",
	XML = "xml",
}

const MediaExtension = {
	...MediaImageExtension,
	...MediaVideoExtension,
	...MediaAudioExtension,
	...MediaDocumentExtension,
	...MediaTextExtension,
};

type MediaExtension = (typeof MediaExtension)[keyof typeof MediaExtension];

export { IMediaDTO, MediaAudioExtension, MediaDocumentExtension, MediaExtension, MediaImageExtension, MediaType, MediaVideoExtension };
