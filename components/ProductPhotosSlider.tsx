import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import IconClose from '../assets/icon-close.svg';

type ProductPhotosSliderProps = {
	images:{url:string}[],
	initialSlide: number;
	onClose: () => void;
};

export function ProductPhotosSlider({
	images,
	initialSlide,
	onClose,
}: ProductPhotosSliderProps) {
	return (
		<>
			<div className='absolute top-0 left-0 w-full h-full z-[100] bg-black/[0.5] flex flex-col justify-center'>
				<Swiper
					pagination={true}
					modules={[Pagination]}
					className=' relative w-full h-full'
					initialSlide={initialSlide}>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								src={image.url}
								fill
								className=' object-contain'
								alt={`Image ${index}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<button className='absolute right-10 top-20 z-[200] ' onClick={onClose}>
					<IconClose className='fill-white' />
				</button>
			</div>
		</>
	);
}
