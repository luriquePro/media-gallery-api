import { ModelMongoTimestamp } from "./app.interface";
import { MediaExtension, MediaType } from "./media.interface";

interface ICategoryDTO extends ModelMongoTimestamp {
	name: string;
	order: number;
	limits?: ICategoryLimits;
	extensions: ICategoryExtesion[];
}

interface ICategoryLimits {
	image?: number;
	video?: number;
	gif?: number;
}

interface ICategoryExtesion {
	type: MediaType;
	extensions: MediaExtension[];
}

export { ICategoryDTO, ICategoryLimits };
