import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from '../../schema/schemaRegister';
import { Input } from './Input';
import { signIn } from 'next-auth/react';
// I'll changed the type any and props if the context idea turn out to be good
export function Login(props:any) {
	type FormData = yup.InferType<typeof loginSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema),
	});

	return (
		<div className='w-[20%] min-w-[15rem]  bg-white py-4   mb-3 px-4'>
			<h2 className='text-center mb-4 font-bold uppercase'>Log in</h2>
			<form
				className='flex flex-col justify-center '
				onSubmit={handleSubmit((data: FormData) => {
					signIn('credentials', data);
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
				<p className='text-xs text-center text-blue-500'>Don't have an account? <span className='cursor-pointer' onClick={()=>props.setIsOpen(!props.isOpen)}>Sign up</span></p>
			</form>
		</div>
	);
}
