import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginSchema } from 'schema/schemaRegister';
import { Account } from 'components/LoginPage/Account';

export function Registration() {
	type FormData = yup.InferType<typeof loginSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema),
	});

	return (
	
			
			<div className='w-4/6  bg-orange-300 py-4 m-auto rounded-2xl'>
				<h2 className='text-center mb-4 font-bold uppercase'>
					Create new account
				</h2>
				<form
					className='flex flex-col justify-center items-center'
					onSubmit={handleSubmit((data: FormData) => {
						console.log(data);
					})}>
					<Account
						register={register}
						typeOfInput={'email'}
						error={errors.email?.message}></Account>
					<Account
						register={register}
						typeOfInput={'password'}
						error={errors.password?.message}></Account>
					<Account
						register={register}
						typeOfInput={'repeat password'}
						error={errors.passwordConfirmation?.message}></Account>

					<button className='bg-black text-white py-1 px-2 rounded-md mt-2'>
						Sign up
					</button>
				</form>
			</div>
	
	);
}
