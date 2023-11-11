import Link from 'next/link';

import SliderHeader from './SliderHeader';

export function Header() {
	return (
		<div className='relative z-0 mb-10'>
			<div>
				<div className='absolute w-full h-full z-20 flex flex-col justify-center items-center text-white '>
					<h1 className='uppercase font-gabarito text-2xl sm:text-3xl lg:text-4xl mb-5'>
						Sports equipment
					</h1>
					<p className='text-sm sm:text-base lg:text-lg text-center mx-2 mb-2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
						explicabo!
					</p>
					<Link
						href={'/'}
						className='py-2 px-3 mt-2 bg-[#70a9a1] text-xs sm:text-sm lg:text-base rounded hover:bg-[#70a9a1]/[0.9]'>
						View collection
					</Link>
				</div>
				<div className='absolute w-full h-full z-10 bg-black opacity-[.60] '></div>
			</div>
			<SliderHeader></SliderHeader>
		</div>
	);
}
