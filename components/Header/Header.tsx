import Link from 'next/link';

import SliderHeader from './SliderHeader';

export function Header() {
	return (
		<div className='relative z-0 mb-10'>
			<div>
				<div className='absolute w-full h-full z-20 flex flex-col justify-center items-center text-white '>
					<h1 className='mb-5 uppercase font-merriweather text-2xl text-center sm:text-3xl lg:text-4xl  '>
						Sports equipment
					</h1>
					<p className=' mx-2 mb-2 text-center text-sm sm:text-base lg:text-lg  '>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
						explicabo!
					</p>
					<Link
						href={'/allProducts'}
						className='py-2 px-3 mt-2 rounded bg-button-color text-xs sm:text-sm lg:text-base hover:bg-button-color/[0.9]'>
						View collection
					</Link>
				</div>
				<div className='absolute w-full h-full z-10 bg-black opacity-[.60] '></div>
			</div>
			<SliderHeader/>
		</div>
	);
}
