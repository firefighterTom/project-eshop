import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { GetProductsQuery } from 'generated/graphql';
import 'swiper/css';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

import { Autoplay } from 'swiper/modules';
import { Product } from '../Product/Product';
import { useRef } from 'react';
type ProductsProps = {
	products: GetProductsQuery;
};
export function SliderProduct(props: ProductsProps) {
	const swiperRef = useRef<SwiperClass>();
	return (
		<div className='max-w-screen-2xl mx-auto'>
			<h2 className='mb-4 text-center font-merriweather text-xl md:text-2xl uppercase font-bold '>
				Our Collection
			</h2>
			<p className='text-center mb-16 mx-2 text-sm md:text-base'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
				explicabo?
			</p>
			<Swiper
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
				}}
				loop={true}
				onBeforeInit={(swiper: SwiperClass) => {
					swiperRef.current = swiper;
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className='relative '>
				{props.products.products.map((product) => {
					const productValues = {
						img: product.images[0].url,
						name: product.name,
						price: product.price,
						id: product.id,
						reviews: product.reviews,
						linkToProduct: `/${product.slug}`,
					};
					return (
						<SwiperSlide key={product.id}>
							<Product product={productValues} />
						</SwiperSlide>
					);
				})}

				<div
					className='absolute z-10 left-5 top-2/4  cursor-pointer'
					onClick={() => swiperRef.current?.slidePrev()}>
					<ArrowLeft className='w-8 h-8' />
				</div>
				<div
					className='absolute z-10 right-5 top-2/4 cursor-pointer'
					onClick={() => swiperRef.current?.slideNext()}>
					<ArrowRight className='w-8 h-8 ' />
				</div>
			</Swiper>
		</div>
	);
}
