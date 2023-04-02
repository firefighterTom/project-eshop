import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from 'schema/schemaRegister';

export default function LoginAndRegistration() {
	type FormData = yup.InferType<typeof loginSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema),
	});

	return (
		<>
			<div className='w-4/6  bg-orange-300 py-4 m-auto rounded-2xl mb-3'>
				<p className='text-center mb-4 font-bold uppercase'>Log in</p>
				<form
					className='flex flex-col justify-center items-center'
					onSubmit={handleSubmit((data: FormData) => {
						console.log(data);
					})}>
					<label className='mb-2'>Email</label>
					<input
						{...register('email')}
						placeholder='Email'
						type='text'
						className='border-2 border-black rounded-md px-2'
					/>
					<p className='h-5 text-red-700 text-xs'>{errors.email?.message}</p>
					<label className='mb-2'>Password</label>
					<input
						{...register('password')}
						placeholder='Password'
						type='password'
						className='border-2 border-black rounded-md px-2'
					/>
					<p className='h-5 text-red-700 text-xs'>{errors.password?.message}</p>
					<button className='bg-black text-white py-1 px-2 rounded-md mt-2'>
						Login
					</button>
				</form>
			</div>
			<div className='w-4/6  bg-orange-300 py-4 m-auto rounded-2xl'>
				<p className='text-center mb-4 font-bold uppercase'>Create new account</p>
				<form
					className='flex flex-col justify-center items-center'
					onSubmit={handleSubmit((data: FormData) => {
						console.log(data);
					})}>
					<label className='mb-2'>Email</label>
					<input
						{...register('email')}
						placeholder='Email'
						type='text'
						className='border-2 border-black rounded-md px-2'
					/>
					<p className='h-5 text-red-700 text-xs'>{errors.email?.message}</p>
					<label className='mb-2'>Password</label>
					<input
						{...register('password')}
						placeholder='Password'
						type='password'
						className='border-2 border-black rounded-md px-2'
					/>
					<p className='h-5 text-red-700 text-xs'>{errors.password?.message}</p>
					<label className='mb-2'>Repeat Password</label>
					<input
						{...register('passwordConfirmation')}
						placeholder='Repeat password'
						type='password'
						className='border-2 border-black rounded-md px-2'
					/>
					<p className='h-5 text-red-700 text-xs'>{errors.passwordConfirmation?.message}</p>
					<button className='bg-black text-white py-1 px-2 rounded-md mt-2'>
						Sign up
					</button>
				</form>
			</div>
		</>
	);
}
