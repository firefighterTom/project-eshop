import { Stars } from './Reviews/Stars';

type ProductProps = {
	name: string;
	img: string;
	price: number;
	reviews: { rating?: number | null }[];
	linkToProduct: string;
};

export function Product(props: ProductProps) {
	console.log(props.img);
	const avarageReviewsScore = props.reviews.length
		? props.reviews.reduce((sum, currentValue) => {
				if (currentValue.rating === null || !currentValue.rating) return sum;
				return currentValue.rating + sum;
		  }, 0) / props.reviews.length
		: 0;

	return (
		<div className='flex flex-col items-center'>
			<img className='h-28 w-28 ' src={props.img} alt={props.name} />
			<p className='font-bold'>{props.name}</p>
			<p className=''>{props.price} $</p>
			<Stars rating={avarageReviewsScore} />
		</div>
	);
}
