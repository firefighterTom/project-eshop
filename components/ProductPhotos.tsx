import Image from 'next/image';
import { useState } from 'react';
import { ProductPhotosSlider } from './ProductPhotosSlider';


type PhotosProps={
	img:string,
	name:string
}

export function Photos(props:PhotosProps ) {
	//Temporarily, until I add other photos
	const images = [props.img, props.img, props.img];
	const [showSlider, setShowSlider] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	// I'll change it to context like in other cases if it turns out it was a good idea.

	const openSlider = (index: number) => {
		setSelectedImageIndex(index);
		setShowSlider(true);
	};

	const closeSlider = () => {
		setShowSlider(false);
	};

	return (
		<>
			<Image
				src={props.img}
				width={0}
				height={0}
				sizes='100vw'
				className='w-full h-[15rem] col-span-full xs:col-start-1 xs:col-end-3 xs:row-start-1 xs:row-end-4 sm:row-end-6 sm:col-end-2 object-contain cursor-pointer '
				alt={props.name}
				onClick={() => openSlider(0)}
			/>
			<div className='flex col-span-full justify-around xs:col-start-3 xs:col-end-4 xs:row-start-1 xs:row-end-4 xs:flex-col xs:items-center sm:flex-row sm:row-start-6 sm:row-end-7  sm:col-start-1 sm:col-end-2 sm:justify-start sm:gap-5 sm: sm:pt-5 '>
				{images.map((image, index) => {
					const sliderIndex = index + 1;
					return (
						<Image
							src={image}
							width={60}
							height={60}
							className=' cursor-pointer'
							alt={props.name}
							onClick={() => openSlider(sliderIndex)}
						/>
					);
				})}

				{showSlider && (
					<ProductPhotosSlider
						images={images}
						initialSlide={selectedImageIndex}
						onClose={closeSlider}
					/>
				)}
			</div>
		</>
	);
}
