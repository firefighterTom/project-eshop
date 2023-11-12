import { Login } from 'components/LoginPage/Login';
import { Registration } from 'components/LoginPage/RegistrationPage';
import { useShowingComponentContext } from 'context/showingComponent';
import Image from 'next/image'

export default function LoginPage() {
	const context =useShowingComponentContext();

	return (
		<div className=' h-full  relative flex flex-col justify-center items-center '>
			<Image src='/tennisBallAndShoes.jpg' fill  className=' -z-10 object-cover ' alt='Ball in the corner'/>
			{!context.switchBetweenLoginAndRegistrationComponents.isOpen && <Login />}
			{context.switchBetweenLoginAndRegistrationComponents.isOpen &&<Registration />}
			</div>
	
	);
}
