import { averageReviewScore } from 'utilities/avarageReviewScore';
import { Stars } from './Reviews/Stars';
import Image from 'next/image';
import { useState } from 'react';
import { ProductHover } from './ProductHover';

type ProductProps = {
	name: string;
	img: string;
	id: string;
	price: number;
	reviews: { rating?: number | null }[];
	linkToProduct: string;
};

export function Product(props: ProductProps) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	const avarageReviewsScore = props.reviews.length
		? averageReviewScore(props.reviews)
		: 0;
	return (
		<div
			className='flex flex-col items-center relative group  '
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<Image
				className='h-28 w-28 '
				width={112}
				height={112}
				src={props.img}
				alt={props.name}
			/>
			<h3 className='font-bold'>{props.name}</h3>
			<p>
				{Intl.NumberFormat('pl-PL', {
					style: 'currency',
					currency: 'PLN',
				}).format(props.price)}
			</p>
			<Stars rating={avarageReviewsScore} />
			{isHovered && (
				<ProductHover
					name={props.name}
					id={props.id}
					linkToProduct={props.linkToProduct}
				/>
			)}
		</div>
	);
}
