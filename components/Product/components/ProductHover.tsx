import Link from 'next/link';
import Eye from '../../../assets/eye.svg';
import { useCartContext } from 'context/cart';
import { useShowingComponentContext } from 'context/showingComponent';

type productHoverProps = {
	product: {
		name: string;
		id: string;
		linkToProduct: string;
		price: number;
		img: string;
	};
};

export function ProductHover(props: productHoverProps) {
	const { addToCart } = useCartContext();
	const context = useShowingComponentContext();
	const product = {
		name: props.product.name,
		id: props.product.id,
		amount: 1,
		img: props.product.img,
		price: props.product.price,
	};
	return (
		<div className='absolute flex flex-col justify-center items-center w-[130%] h-full bg-quartz-gray/90 gap-3 animate-opacity '>
			<button
				className='inline-block text-black text-center bg-white p-1 px-3 rounded-sm border-white hover:bg-white/[0.7] '
				onClick={() => {
					addToCart(product);
					context.visibilityToggle('addedToCartNotificationComponent');
				}}>
				Add to cart
			</button>

			<Link
				href={`products${props.product.linkToProduct}`}
				className='text-white'>
				<Eye className='bg-white fill-quartz-gray rounded-sm border-white hover:bg-white/[0.7] ' />
			</Link>
		</div>
	);
}
