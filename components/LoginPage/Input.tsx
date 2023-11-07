import React, { forwardRef } from 'react';

interface Props {
	inputname: string;
	error: string | undefined;
	type: string;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return (
		<>
			<label className='mb-1 flex flex-col text-center '>
				<input
					ref={ref}
					{...props}
					type={props.type}
					placeholder={props.inputname}
					className=' w-full px-2 bg-transparent placeholder-gray-500 border-black  border-b-2'
				/>
			</label>
			<p className='h-4 text-red-700 text-xs text-center'>{props.error}</p>
		</>
	);
});

Input.displayName = 'Input';
