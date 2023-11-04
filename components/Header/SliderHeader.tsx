import { Swiper, SwiperSlide } from 'swiper/react';
import ShoesImg from '../../images/shoesImg.jpg';
import BikeImg from '../../images/bikeImg.jpg';
import TennisImg from '../../images/tennisImg.jpg';
import { Autoplay } from 'swiper';
import Image from 'next/image';

const imgages = [
	{ src: ShoesImg, name: 'ShoesImg', alt: 'Basketball shoes' },
	{ src: BikeImg, name: 'BikeImg', alt: 'Stationary bikes' },
	{ src: TennisImg, name: 'TennisImg', alt: 'Tennis racket' },
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
				{imgages.map((photo) => {
					return (
						<SwiperSlide key={photo.name}>
							<div className=' relative h-[60vh] lg:h-[70vh] '>
								<Image
									priority={true}
									src={photo.src}
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
