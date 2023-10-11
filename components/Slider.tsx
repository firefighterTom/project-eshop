import { Swiper, SwiperSlide } from 'swiper/react';
import { GetProductsQuery } from 'generated/graphql';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
type ProductsProps = {
	products: GetProductsQuery;
};
export function Slider(props: ProductsProps) {
	console.log(props.products.products);
	return (
		<>
			<h2 className='text-center mb-10'>Bestseller</h2>
			<Swiper
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Navigation]}
				className='text-center '>
				{props.products.products.map((product) => {
					const productImg = product.images[0].url;
					const productName = product.name;
					return (
						<SwiperSlide key={product.id}>
							<img className='h-28 m-auto' src={productImg} alt={productName} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
