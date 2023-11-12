import { useState } from 'react';
import IconMinus from '../assets/icon-minus.svg';
import IconPlus from '../assets/icon-plus.svg';

export function ChangeTheAmountOfTheProduct() {
	const [amountOfProducts, setAmountOfProducts] = useState(1);
	return (
		<div className='flex'>
			<span
				className=' flex items-center p-2 cursor-pointer border '
				onClick={() => {
					if (amountOfProducts > 1) setAmountOfProducts(amountOfProducts - 1);
				}}>
				<IconMinus />
			</span>
			<p className=' w-10  flex justify-center items-center text-center border-y '>
				{amountOfProducts}
			</p>
			<span className='flex items-center p-2 border cursor-pointer'>
				<IconPlus
					onClick={() => {
						if (amountOfProducts < 10)
							setAmountOfProducts(amountOfProducts + 1);
					}}
				/>
			</span>
		</div>
	);
}
