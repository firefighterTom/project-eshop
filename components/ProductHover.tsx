import Link from 'next/link';
import Eye from './../assets/eye.svg';
import { useCartContext } from 'context/contextCart';

type linkToProductType = {
	name: string;
	id: string;
	linkToProduct: string;
};

export function ProductHover(props: linkToProductType) {
	const { addToCart } = useCartContext();
	const product = {
		name: props.name,
		id: props.id,
	};
	return (
		<div className='absolute flex flex-col justify-center items-center w-9/12 h-full bg-quartz-gray/90 gap-3 animate-opacity '>
			<button
				className='inline-block text-black text-center bg-white p-1 px-3 rounded-sm border-white '
				onClick={() => addToCart(product)}>
				Add to cart
			</button>
			<button className='text-white'>
				<Link href={`products${props.linkToProduct}`}>
					<Eye className='bg-white fill-quartz-gray rounded-sm border-white ' />
				</Link>
			</button>
		</div>
	);
}
