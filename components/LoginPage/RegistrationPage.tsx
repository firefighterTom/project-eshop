import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registrationSchema } from 'schema/schemaRegister';
import { Input } from 'components/LoginPage/Input';
import { useShowingComponentContext } from 'context/showingComponent';

export function Registration() {
	const context = useShowingComponentContext();
	type FormData = yup.InferType<typeof registrationSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(registrationSchema),
	});
	const mutationFunction = async (registrationData: FormData) => {
		const response = await fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registrationData),
		});
	};

	return (
		<div className='w-[20%] min-w-[15rem]  bg-white py-4   mb-3 px-4'>
			<h2 className='text-center mb-4 font-bold uppercase'>
				Create new account
			</h2>
			<form
				className='flex flex-col justify-center'
				onSubmit={handleSubmit((data: FormData) => {
					mutationFunction(data);
				})}>
				<Input
					{...register('name')}
					inputname={'Name'}
					type={'text'}
					error={errors.name?.message}
				/>
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
				<Input
					{...register('passwordConfirmation')}
					inputname={'Repeat Password'}
					type={'password'}
					error={errors.passwordConfirmation?.message}
				/>
				<button className='bg-black text-white text-xs py-2 font-bold uppercase  mt-4 mb-2'>
					Sign up
				</button>
				<p className='text-xs text-center'>
					Already have an account?{' '}
					<span
						className='cursor-pointer text-blue-500'
						onClick={() =>
							context.visibilityToggle(
								'switchBetweenLoginAndRegistrationComponents'
							)
						}>
						Sign In
					</span>
				</p>
			</form>
		</div>
	);
}
