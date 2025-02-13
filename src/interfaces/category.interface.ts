import { ModelMongoTimestamp } from "./app.interface";

interface ICategoryDTO extends ModelMongoTimestamp {
	name: string;
	order: number;
	limits?: ICategoryLimits;
}

interface ICategoryLimits {
	image?: number;
	video?: number;
	gif?: number;
}

export { ICategoryDTO, ICategoryLimits };
