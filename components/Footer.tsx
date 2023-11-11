import Link from 'next/link';
import FacebookIcon from '../assets/icon-facebook.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
import TwitterIcon from '../assets/icon-twitter.svg';

export function Footer() {
	return (
		<footer className='py-4 bg-[#2d3e50] text-white grid  text-center sm:grid-cols-2 '>
			<Link
				href={'/'}
				className='text-2xl sm:text-3xl font-gabarito uppercase sm:text-left sm:pl-4  '>
				E-shop
			</Link>
			<p className='text-xs px-8 pt-3 sm:text-left sm:px-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
				nesciunt nemo consequatur maiores odio voluptatem!
			</p>

			<h4 className='mt-5 sm:row-start-1 sm:col-start-2 sm:mt-0 uppercase font-bold'>
				Follow us
			</h4>
			<div className='flex justify-center gap-10 pt-5 sm:pt-0'>
				<Link href={'/'}>
					<FacebookIcon className='w-6 h-6' />
				</Link>
				<Link href={'/'}>
					<TwitterIcon className='w-6 h-6' />
				</Link>
				<Link href={'/'}>
					<InstagramIcon className='w-6 h-6' />
				</Link>
			</div>
		</footer>
	);
}
