import Image from 'next/image';
import Link from 'next/link';

export function BestProduct() {
	return (
		<section className=' mt-8 bg-[#EEF1F8] py-10 md:flex md:justify-center'>
			<div className='max-w-screen-2xl bg-[#EEF1F8] grid md:grid-cols-2 md:grid-rows-3  text-center relative md:text-left'>
				<h3 className='font-bold uppercase text-2xl mb-5 md:pl-4'>
					Best seller - Wilson
				</h3>
				<p className='text-xs px-4 md:w-[50%]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minus
					obcaecati reiciendis repellendus unde porro officia quod, esse
					aperiam?
				</p>
				<div className=' relative flex justify-center md:row-span-full md:col-start-2 '>
					<Image
						src={'/bikeImg.jpg'}
						alt='shoes'
						width={0}
						height={0}
						sizes='50vw'
						className='w-[15rem]  object-contain h-64 md:w-full  '
					/>
				</div>
				<Link
					href={'/'}
					className=' py-2 px-3 min-w- bg-[#70a9a1] text-white justify-self-center md:self-center md:justify-self-start md:ml-4'>
					Buy Now
				</Link>
			</div>
		</section>
	);
}
