import { useState } from 'react';
import IconPlus from '../../assets/icon-plus.svg';
import Image from 'next/image';

type AccordionOrdersProps = {
	id: string;
	total: number;
	orderItems: {
		__typename?: 'OrderItem' | undefined;
		quantity: number;
		product?:
			| {
					__typename?: 'Product' | undefined;
					name: string;
					price: number;
					images: {
						__typename?: 'Asset' | undefined;
						url: string;
					}[];
			  }
			| null
			| undefined;
	}[];
};
export function AccordionOrders(props: AccordionOrdersProps) {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div
			key={props.id}
			className='w-full max-w-screen-md mb-2 '
			onClick={() => {
				setIsOpen(!isOpen);
			}}>
			<div className='flex  bg-button-color p-2 mx-2'>
				<p className='w-full truncate'>Order: {props.id} </p>
				<div className=''>
					<IconPlus
						className={`${
							isOpen ? 'rotate-[0deg]' : 'rotate-[45deg]'
						} duration-300 `}
					/>
				</div>
			</div>
			{!isOpen && (
				<div className=' mx-2 border-l border-r border-b'>
					{props.orderItems.map((p, index) => {
						return (
							<div key={index}>
								{p.product && (
									<div
										
										className='grid grid-rows-2 grid-cols-3 px-2 my-2  md:flex justify-between md:min-h-[40px]'>
										<div className=' row-span-full justify-self-center self-center md:basis-3/12 '>
											<Image
												src={p.product.images[0].url}
												width={40}
												height={40}
												alt={p.product.name}
												className='md:mx-auto'
											/>
										</div>
										<p className='row-start-1 row-end-2 col-start-2 col-end-4 md:basis-3/12 '>
											{p.product.name}
										</p>
										<p className='row-start-2 row-end-3 md:basis-3/12'>
											{Intl.NumberFormat('pl-PL', {
												style: 'currency',
												currency: 'PLN',
											}).format(p.product.price)}
										</p>
										<p className='md:basis-3/12'>x {p.quantity}</p>
									</div>
								)}
							</div>
						);
					})}
					<p className='text-center border-t'>
						Total:{' '}
						{Intl.NumberFormat('pl-PL', {
							style: 'currency',
							currency: 'PLN',
						}).format(props.total)}
					</p>
				</div>
			)}
		</div>
	);
}
