import { NextApiHandler } from 'next';

import {
	MyMutationDocument,
	MyMutationMutation,
	MyMutationMutationVariables,
} from 'generated/graphql';
import { admin } from 'apollo/client';
import { loginSchema } from 'schema/schemaRegister';
import { ValidationError } from 'yup';
import bcrypt from 'bcrypt';

const handler: NextApiHandler = async (req, res) => {
	if (req.method !== 'POST') {
		return res.setHeader('Access-Control-Allow-Methods', 'POST').end();
	}
	try {
		const requestData = loginSchema.validateSync(req.body);
		const hashedPassword = await bcrypt.hash(requestData.password, 15);
		const { data } = await admin.mutate<
			MyMutationMutation,
			MyMutationMutationVariables
		>({
			mutation: MyMutationDocument,
			variables: {
				email: req.body.email,
				password: hashedPassword,
			},
		});
		res.json({
			email: data?.createAccount?.email,
			id: data?.createAccount?.id,
		});
	} catch (error) {
		if (error instanceof ValidationError) {
			return res.json({ code: 400, message: error.message });
		}
		res.json({ code: 400, message: 'Problem during call api' });
	}

	// const data = await admin.mutate<
	// 	MyMutationMutation,
	// 	MyMutationMutationVariables
	// >({
	// 	mutation: MyMutationDocument,
	// 	variables: {
	// 		email: req.body.email,
	// 		password: req.body.password,
	// 	},
	// });
	// console.log(data)
};
export default handler;
