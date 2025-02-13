import * as yup from "yup";
import { Category } from "../../../models/Category";
import { BadRequestError } from "../../../shared/ErrorApi";
import { YupValidate } from "../../../shared/YupValidate";
import { ICreateCategoryDTO, ICreateCategoryService } from "./CreateCategory.interface";

class CreateCategoryService implements ICreateCategoryService {
	public async execute({ name, order, limits }: ICreateCategoryDTO) {
		// Validar os dados
		this.validate({ name, order, limits });

		const [categoryWithNameExists, categoryWithOrderExists] = await Promise.all([Category.findOne({ name }), Category.findOne({ order })]);

		// Validar se categoria já existe
		if (categoryWithNameExists) {
			throw new BadRequestError(`Categoria '${name}' já cadastrada`);
		}

		// Validar se Order já existe
		if (categoryWithOrderExists) {
			throw new BadRequestError(`Já existe uma categoria com ordem ${order}`);
		}

		// Criar categoria
		await Category.create({ name, order, limits });

		return {
			error: false,
			message: `Categoria '${name}' criada com sucesso`,
		};
	}

	private validate(data: ICreateCategoryDTO) {
		const schema = {
			name: yup.string().strict(true).required("O Campo ‘Nome’ deve ser preenchido."),
			order: yup.number().strict(true).min(1).required("O Campo ‘Ordem’ deve ser preenchido."),
			limits: yup.object().shape({
				image: yup.number().strict(true).min(0),
				video: yup.number().strict(true).min(0),
				gif: yup.number().strict(true).min(0),
			}),
		};

		return YupValidate(schema, data);
	}
}

export { CreateCategoryService };
