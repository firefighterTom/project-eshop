import React, { forwardRef } from 'react';

interface Props {
	inputName: string;
	error: string | undefined;
	type: string;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return (
		<>
			<label className='mb-1 flex flex-col text-center'>
				{props.inputName}
				<input
					ref={ref}
					{...props}
					type={props.type}
					className='border-2 border-black rounded-md px-2'/>
			</label>
			<p className='h-4 text-red-700 text-xs'>{props.error}</p>
		</>
	);
});

Input.displayName = 'Input';