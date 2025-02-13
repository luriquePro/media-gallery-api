import mongoose from "mongoose";

interface ModelMongoTimestamp {
	_id: mongoose.Types.ObjectId;
	id: string;
	createdAt: Date;
	updatedAt: Date;
}

export { ModelMongoTimestamp };
