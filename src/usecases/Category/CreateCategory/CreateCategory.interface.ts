import { ICategoryLimits } from "../../../interfaces/category.interface";

interface ICreateCategoryDTO {
	name: string;
	order: number;
	limits?: ICategoryLimits;
}

interface ICreateCategoryService {
	execute(data: ICreateCategoryDTO): Promise<{ error: boolean; message: string }>;
}

export { ICreateCategoryDTO, ICreateCategoryService };
