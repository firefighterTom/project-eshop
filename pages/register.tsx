import AccountWrapper from 'components/AccountWrapper/AccountWrapper';
import { Registration } from 'components/LoginPage/RegistrationPage';
import { useSession } from 'next-auth/react';
import router from 'next/router';

export default function LoginPage() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (session) {
		router.replace('/');
	}
	if (!session) return <AccountWrapper><Registration/></AccountWrapper>
}