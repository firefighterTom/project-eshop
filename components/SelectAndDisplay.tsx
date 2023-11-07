import { useState } from 'react';
import { SliderReviews } from './SliderReviews';

type PropsSelectAndDisplay = {
	description: string;
	productReviews: {
		id: string;
		name: string;
		content: string;
		rating?: number | null | undefined;
	}[];
};

export function SelectAndDisplay(props: PropsSelectAndDisplay) {
	const [selectedOption, setSelectedOption] = useState('description');
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};
	return (
		<>
			<div className='w-screen max-w-[1000px]  sm:hidden'>
				<div className='border-y flex justify-center '>
					<select
						value={selectedOption}
						onChange={handleSelectChange}
						className='text-center uppercase py-2 px-5'>
						<option value='description'>description</option>
						<option value='reviews'>reviews</option>
					</select>
				</div>

				{selectedOption === 'description' && <p className='px-2'>{props.description}</p>}
				{selectedOption === 'reviews' && (
					<SliderReviews productReviews={props.productReviews} />
				)}
			</div>
			<div className='w-screen max-w-[1000px] mt-5 hidden sm:block'>
				<div className=' flex gap-7 uppercase '>
					<p
						className={`cursor-pointer relative pb-3  ${
							selectedOption === 'description'
								? 'after:content-[""] after:w-full after:h-1 after:bottom-0 after:bg-black after:block after:absolute'
								: ''
						}`}
						onClick={() => setSelectedOption('description')}>
						description
					</p>
					<p
						className={`cursor-pointer relative pb-3  ${
							selectedOption === 'reviews'
								? 'after:content-[""] after:w-full after:h-1 after:bottom-0 after:bg-black after:block after:absolute'
								: ''
						}`}
						onClick={() => setSelectedOption('reviews')}>
						reviews
					</p>
				</div>
				<div className='border-y py-4'>
					{selectedOption === 'description' && (
						<p className='py-3'>{props.description}</p>
					)}
					{selectedOption === 'reviews' && (
						<SliderReviews productReviews={props.productReviews} />
					)}
				</div>
			</div>
		</>
	);
}
