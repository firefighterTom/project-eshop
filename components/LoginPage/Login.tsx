import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from '../../schema/schemaRegister';
import { Input } from './Input';
import { signIn } from 'next-auth/react';
import { useShowingComponentContext } from 'context/showingComponent';
import { useState } from 'react';
import Link from 'next/link';

export function Login() {
	const [error, setError] = useState('');
	type FormData = yup.InferType<typeof loginSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema),
	});
	return (
		<div className='w-[20%] min-w-[15rem]  bg-white py-4 mb-3 px-4'>
			<h2 className='text-center mb-1 font-bold uppercase'>Log in</h2>
			<p className='text-xs text-center pb-2 text-red-700 '>
				{' '}
				{error ? error : <span>&nbsp;</span>}
			</p>
			<form
				className='flex flex-col justify-center '
				onSubmit={handleSubmit((data: FormData) => {
					const res = signIn('credentials', { ...data, redirect: false }).then(
						(response) => {
							if (response?.error) return setError('Wrong email or password');
							setError('');
						}
					);
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
				<button className='bg-black text-white text-sm py-1 font-bold uppercase  mt-4 mb-2 '>
					Login
				</button>
				<p className='text-xs text-center'>
					{`Don't have an account?`}
					<Link href={'/register'} className=' text-blue-500 cursor-pointer'>
						Sign up
					</Link>
				</p>
			</form>
		</div>
	);
}
