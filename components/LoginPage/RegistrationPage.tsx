import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registrationSchema } from 'schema/schemaRegister';
import { Input } from 'components/LoginPage/Input';

export function Registration() {
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
		console.log(await response.json());
	};

	return (
		<div className='w-4/6  bg-orange-300 py-4 m-auto rounded-2xl'>
			<h2 className='text-center mb-4 font-bold uppercase'>Create new Input</h2>
			<form
				className='flex flex-col justify-center items-center'
				onSubmit={handleSubmit((data: FormData) => {
					mutationFunction(data);
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
				<Input
					{...register('passwordConfirmation')}
					inputname={'Repeat Password'}
					type={'password'}
					error={errors.passwordConfirmation?.message}
				/>

				<button className='bg-black text-white py-1 px-2 rounded-md mt-2'>
					Sign up
				</button>
			</form>
		</div>
	);
}
