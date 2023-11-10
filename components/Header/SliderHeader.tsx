import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';

const images = [
	{  name: 'shoesImg', alt: 'Basketball shoes' },
	{  name: 'bikeImg', alt: 'Stationary bikes' },
	{  name: 'tennisImg', alt: 'Tennis racket' },
];

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
				className='mySwiper'>
				{images.map((photo) => {
					return (
						<SwiperSlide key={photo.name}>
							<div className='relative h-[60vh] lg:h-[70vh] max-h-[30rem] '>
								<Image
									priority={true}
									src={`/${photo.name}.jpg`}
									fill
									className='object-cover '
									alt={photo.alt}
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
