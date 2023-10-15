import { admin } from 'apollo/client';
import {
	GetAccountByEmailDocument,
	GetAccountByEmailQuery,
	GetAccountByEmailQueryVariables,
} from 'generated/graphql';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
export const authOptions: AuthOptions = {
	pages: {
		signIn: '/Account',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) {
					return null;
				}
				const { email, password } = credentials;
				const { data } = await admin.query<
					GetAccountByEmailQuery,
					GetAccountByEmailQueryVariables
				>({
					query: GetAccountByEmailDocument,
					variables: { email },
				});
				if (!data.account) {
					return null;
				}
				const isCorrectPassword = await bcrypt.compare(
					password,
					data.account?.password
				);
				if (isCorrectPassword) {
					return {
						id: data.account.id,
						email: data.account.email,
					};
				}
				return null;
			},
		}),
	],
};
export default NextAuth(authOptions);
