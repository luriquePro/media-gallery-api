import { Request, Response } from "express";
import { ICreateCategoryDTO, ICreateCategoryService } from "./CreateCategory.interface";

class CreateCategoryController {
	constructor(private readonly CreateCategoryService: ICreateCategoryService) {}

	public async handle(req: Request, res: Response) {
		const dataCreate: ICreateCategoryDTO = {
			name: req.body.name,
			order: req.body.order,
			limits: { image: req.body.limits?.image, video: req.body.limits?.video, gif: req.body.limits?.gif },
		};

		const result = await this.CreateCategoryService.execute(dataCreate);
		res.json(result);
	}
}

export { CreateCategoryController };
