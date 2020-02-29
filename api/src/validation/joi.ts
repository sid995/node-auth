import { BadRequest } from "../errors";
import { ObjectSchema } from "@hapi/joi";

export const validate = async (schema: ObjectSchema, payload: any) => {
	try {
		await schema.validateAsync(payload, { abortEarly: false });
	} catch (e) {
		throw new BadRequest(e);
	}
};
