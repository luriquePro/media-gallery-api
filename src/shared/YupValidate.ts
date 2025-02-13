import * as yup from "yup";
import { ValidationError } from "./ErrorApi";

const YupValidate = (schema: yup.AnyObject, data: object) => {
	try {
		yup.object().shape(schema).validateSync(data);
	} catch (error: any) {
		throw new ValidationError(error.message);
	}
};

export { YupValidate };
