import { averageReviewScore } from 'utilities/avarageReviewScore';
import { Stars } from '../Stars/Stars';
import Image from 'next/image';
import { useState } from 'react';
import { ProductHover } from './components/ProductHover';

type ProductProps = {
	product: {
		name: string;
		img: string;
		id: string;
		price: number;
		reviews: { rating?: number | null }[];
		linkToProduct: string;
	};
};

export function Product(props: ProductProps) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	const averageReviewsScore = props.product.reviews.length
		? averageReviewScore(props.product.reviews)
		: 0;
	const product = {
		name: props.product.name,
		id: props.product.id,
		price: props.product.price,
		img: props.product.img,
		linkToProduct: props.product.linkToProduct,
	};

	return (
		<div className='flex flex-col items-center'>
			<div
				className='flex flex-col items-center relative group max-w-[250px]   '
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<Image
					className=' h-[120px] w-[150px] mb-2  '
					width={200}
					height={200}
					src={props.product.img}
					alt={props.product.name}
				/>
				<div className='flex flex-col items-center  w-full py-2 '>
					<h3 className='font-bold'>{props.product.name}</h3>
					<p>
						{Intl.NumberFormat('pl-PL', {
							style: 'currency',
							currency: 'PLN',
						}).format(props.product.price)}
					</p>
					<Stars rating={averageReviewsScore} />
				</div>
				{isHovered && <ProductHover product={product} />}
			</div>
		</div>
	);
}
