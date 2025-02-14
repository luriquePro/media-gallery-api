import { ModelMongoTimestamp } from "./app.interface";
import { ICategoryLimits } from "./category.interface";

interface IMediaDTO extends ModelMongoTimestamp {
	name: string;
	originalName: string;
	extension: string;
	size: number;
	type: string;
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

export { IMediaDTO };

