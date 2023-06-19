import { Login } from 'components/LoginPage/Login';
import { Registration } from 'components/LoginPage/RegistrationPage';

export default function LoginPage() {
	return (
		<>
			<h1 className='text-center'>E-shop</h1>
			<Login/>
			<Registration/>
		</>
	);
}
