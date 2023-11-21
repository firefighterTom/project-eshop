import { Login } from 'components/LoginPage/Login';
import { Registration } from 'components/LoginPage/RegistrationPage';
import { useShowingComponentContext } from 'context/showingComponent';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import router from 'next/router';

export default function LoginPage() {
	const context = useShowingComponentContext();
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (session) {
		router.replace('/');
	}
	if (!session)
		return (
			<div className=' h-full  relative flex flex-col justify-center items-center '>
				<Image
					src='/tennisBallAndShoes.jpg'
					fill
					className=' -z-10 object-cover '
					alt='Ball in the corner'
				/>
				{!context.switchBetweenLoginAndRegistrationComponents.isOpen && (
					<Login />
				)}
				{context.switchBetweenLoginAndRegistrationComponents.isOpen && (
					<Registration />
				)}
			</div>
		);
}
