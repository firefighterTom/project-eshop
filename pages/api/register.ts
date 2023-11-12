import { NextApiHandler } from 'next';

import {
	CreateAccountDocument,
	CreateAccountMutation,
	CreateAccountMutationVariables,
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
			CreateAccountMutation,
			CreateAccountMutationVariables
		>({
			mutation: CreateAccountDocument,
			variables: {
				name: req.body.name,
				email: req.body.email,
				password: hashedPassword,
			},
		});
		res.json({
			name: data?.createAccount?.name,
			email: data?.createAccount?.email,
			id: data?.createAccount?.id,
		});
	} catch (error) {
		if (error instanceof ValidationError) {
			return res.json({ code: 400, message: error.message });
		}
		res.json({ code: 400, message: 'Problem during call api' });
	}
};
export default handler;
