import { useCartContext } from 'context/cart';
import Image from 'next/image';

type bestProductProps = {
	bestProduct: {
		name: string;
		id: string;
		price: number;
		img: string;
		amount: number;
	};
};

export function BestProduct(props: bestProductProps) {
	const { addToCart } = useCartContext();

	return (
		<section className=' mt-8 bg-solitude py-10 md:flex md:justify-center'>
			<div className='relative max-w-screen-2xl  grid md:grid-cols-2 md:grid-rows-3  text-center  md:text-left bg-solitude'>
				<h3 className='font-bold font-merriweather  mb-5 md:mb-0 md:pl-4 uppercase text-xl md:text-2xl lg:text-3xl'>
					Best seller - Wilson
				</h3>
				<p className='text-xs px-4 md:w-[70%]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minus
					obcaecati reiciendis repellendus unde porro officia quod, esse
					aperiam?
				</p>
				<div className=' relative flex justify-center md:row-span-full md:col-start-2 '>
					<Image
						src={props.bestProduct.img}
						alt='shoes'
						width={0}
						height={0}
						sizes='50vw'
						className='w-[10rem] xs:w-[12rem]  object-contain h-64 md:w-full  '
					/>
				</div>
				<button
					onClick={() => addToCart(props.bestProduct)}
					className=' py-2 px-3 min-w- bg-button-color text-white justify-self-center md:self-center md:justify-self-start md:ml-4 rounded hover:bg-button-color/[0.9]'>
					Buy Now
				</button>
			</div>
		</section>
	);
}
