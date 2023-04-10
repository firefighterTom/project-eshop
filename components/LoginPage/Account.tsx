
interface Props {
	register: any;
	typeOfInput: string;
	error: string | undefined;
}

export function Account({ register, typeOfInput, error }: Props) {
    const placeholder=typeOfInput.charAt(0).toUpperCase()
    + typeOfInput.slice(1)

	return (
		<>
			<label className='mb-2'>{placeholder}
			<input
				{...register(typeOfInput)}
				placeholder={placeholder}
				type='text'
				className='border-2 border-black rounded-md px-2'
			/>
			</label>
			<p className='h-5 text-red-700 text-xs'>{error}</p>
		</>
	);
}
