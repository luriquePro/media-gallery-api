import { Document, model, Schema } from "mongoose";
import { v4 } from "uuid";
import { ICategoryDTO } from "../interfaces/category.interface";
import { MediaExtension, MediaType } from "../interfaces/media.interface";

interface ICategoryModel extends Partial<Omit<Document, "id">>, Omit<ICategoryDTO, "_id"> {}

const CategorySchema = new Schema<ICategoryModel>(
	{
		name: { type: String, required: true, unique: true, index: true },
		order: { type: Number, required: true, index: true },
		limits: { image: { type: Number }, video: { type: Number }, gif: { type: Number } },
		extensions: [
			{
				type: { type: String, required: true, index: true, enum: MediaType },
				extensions: { type: [String], required: true, index: true, enum: MediaExtension },
			},
		],
		id: { type: String, required: true, unique: true, index: true, default: v4 },
	},
	{ timestamps: true },
);

const Category = model<ICategoryModel>("Category", CategorySchema, "categories");

export { Category };
