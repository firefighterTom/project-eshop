import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from '../../schema/schemaRegister';
import  {Input}  from './Input';

export function Login() {
	type FormData = yup.InferType<typeof loginSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema),
	});

	return (
		<div className='w-4/6  bg-orange-300 py-4 m-auto rounded-2xl mb-3'>
			<h2 className='text-center mb-4 font-bold uppercase'>Log in</h2>
			<form
				className='flex flex-col justify-center items-center'
				onSubmit={handleSubmit((data: FormData) => {
					console.log(data)
				})}>
				<Input
					{...register('email')}
					inputname={'Email'}
					type={'text'}
					error={errors.email?.message}
				/>
				<Input
					{...register('password')}
					inputname={'Password'}
					type={'password'}
					error={errors.password?.message}
				/>
				<button className='bg-black text-white py-1 px-2 rounded-md mt-2'>
					Login
				</button>
			</form>
		</div>
	);
}
