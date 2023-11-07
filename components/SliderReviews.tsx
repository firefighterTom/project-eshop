import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Reviews } from './Reviews/Reviews';
import 'swiper/css';

type SliderReviewsProps = {
	productReviews: {
		id: string;
		name: string;
		content: string;
		rating?: number | null | undefined;
	}[];
};
export function SliderReviews(props: SliderReviewsProps) {
	return (
		<Swiper
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			loop={true}
			modules={[Autoplay]} className=''>
			{props.productReviews.map((review) => {
				return (
					<SwiperSlide key={review.id} className='justify-center py-3'>
						<Reviews
							name={review.name}
							content={review.content}
							rating={review.rating}></Reviews>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
