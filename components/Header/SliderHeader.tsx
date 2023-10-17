import { Swiper, SwiperSlide } from 'swiper/react';
import BiggerImgShoes from '../../images/shoesBiggerScreen.jpg';
import SmallerImgShoes from '../../images/shoesSmallScreen.jpg';
import BiggerImgBikes from '../../images/bikesBiggerScreen.jpg';
import SmallerImgBikes from '../../images/bikesSmallerScreen.jpg';
import BiggerImgTennis from '../../images/tennisBiggerScreen.jpg';
import SmallerImgTennis from '../../images/tennisSmallerScreen.jpg';
import { Autoplay } from 'swiper';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type ImgKeeper = {
	src: StaticImageData;
	name: string;
};

export default function SliderHeader() {
	const imgForBiggerScreen = [
		{ src: BiggerImgShoes, name: 'BiggerImgShoes' },
		{ src: BiggerImgBikes, name: 'BiggerImgBikes' },
		{ src: BiggerImgTennis, name: 'BiggerImgTennis' },
	];
	const imgForSmallerScreen = [
		{ src: SmallerImgShoes, name: 'SmallerImgShoes' },
		{ src: SmallerImgBikes, name: 'SmallerImgBikes' },
		{ src: SmallerImgTennis, name: 'SmallerImgTennis' },
	];
	const [imgSrc, setImgSrc] = useState<ImgKeeper[]>([]);
	useEffect(() => {
		if (window.innerWidth < 800) {
			setImgSrc(imgForSmallerScreen);
		} else {
			setImgSrc(imgForBiggerScreen);
		}
	}, [window.innerWidth]);
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
				{imgSrc.map((photo) => {
					return (
						<SwiperSlide key={photo.name}>
							<Image
								priority={true}
								src={photo.src}
								width={0}
								height={0}
								className='w-full h-[60vh]'
								alt='Basketball shoes'
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
