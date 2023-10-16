import { Swiper, SwiperSlide } from 'swiper/react';
import Shoes from '../../images/shoes-1011596_1920.jpg';
import Gym from '../../images/sports-1962574_1920.jpg';
import { Autoplay } from 'swiper';
import Image from 'next/image';

export default function SliderHeader() {
	return (
		<>
			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[Autoplay]}
				className='mySwiper z-0'>
				<SwiperSlide>
					<Image
						src={Shoes}
						width={0}
						height={0}
						className='w-full h-[50vh]'
						alt='Basketball shoes'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={Gym}
						width={0}
						height={0}
						className='w-full h-[50vh]'
						alt='Stationary bikes'
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
