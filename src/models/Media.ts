import { Document, model, Schema } from "mongoose";
import { v4 } from "uuid";
import { IMediaDTO, MediaExtension, MediaType } from "../interfaces/media.interface";

interface IMediaModel extends Partial<Omit<Document, "id">>, Omit<IMediaDTO, "_id"> {}

const MediaSchema = new Schema<IMediaModel>(
	{
		name: { type: String, required: true, unique: true, index: true },
		originalName: { type: String, required: true, index: true },
		extension: { type: String, required: true, index: true, enum: MediaExtension },
		size: { type: Number, required: true, index: true },
		type: { type: String, required: true, index: true, enum: MediaType },
		category: {
			name: { type: String, required: true, index: true },
			order: { type: Number, required: true, index: true },
			limits: { image: { type: Number }, video: { type: Number }, gif: { type: Number } },
		},
		content_hash: { type: String, required: true, index: true },
		width: { type: Number, required: true, index: true },
		height: { type: Number, required: true, index: true },
		formattedSize: { type: String, required: true, index: true },
		id: { type: String, required: true, unique: true, index: true, default: v4 },
	},
	{ timestamps: true },
);

const Media = model<IMediaModel>("media", MediaSchema, "media_files");

export { Media };
