import { NextApiHandler } from 'next';

import {
	MyMutationDocument,
	MyMutationMutation,
	MyMutationMutationVariables,
} from 'generated/graphql';
import { admin } from 'apollo/client';

const handler: NextApiHandler = async (req, res) => {
	// console.log(req.body);
	

const data=await admin.mutate<MyMutationMutation, MyMutationMutationVariables>({
		mutation: MyMutationDocument,
		variables: {
			InputAccount: { email: req.body.email, password: req.body.password },
		},
	});
    // console.log(data)
};
export default handler;
