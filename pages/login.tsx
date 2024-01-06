import AccountWrapper from 'components/AccountWrapper/AccountWrapper';
import { Login } from 'components/LoginPage/Login';
import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import router from 'next/router';

export default function LoginPage() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (session) {
		router.replace('/');
	}
	if (!session)
		return (
			<AccountWrapper>
				<NextSeo
					title='Login'
					openGraph={{
						url: 'http://localhost:3000/login',
					}}
				/>
				<Login />
			</AccountWrapper>
		);
}
