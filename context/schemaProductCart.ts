import * as yup from 'yup';
export const schemaProductCart = yup.object({
	id: yup.string().required(),
	name: yup.string().required(),
	amount: yup.number().max(20).required(),
});
export type SchemaProductCart = yup.InferType<typeof schemaProductCart>;
