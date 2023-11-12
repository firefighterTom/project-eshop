import Link from 'next/link';
import FacebookIcon from '../../assets/icon-facebook.svg';
import InstagramIcon from '../../assets/icon-instagram.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';

export function Footer() {
	return (
		<footer className='py-4 grid bg-madison text-white text-center sm:grid-cols-2'>
			<Link
				href={'/'}
				className='text-2xl font-merriweather uppercase sm:text-left sm:pl-4  sm:text-3xl sm:text-left'>
				E-shop
			</Link>
			<p className=' px-8 pt-3 text-xs sm:px-4 sm:text-left'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
				nesciunt nemo consequatur maiores odio voluptatem!
			</p>

			<h4 className='mt-5 text-sm uppercase font-bold sm:row-start-1 sm:col-start-2 sm:mt-0  sm:text-base'>
				Follow us
			</h4>
			<div className='flex justify-center gap-10 pt-5 sm:pt-0'>
				<Link href={'/'}>
					<FacebookIcon className='w-5 h-5 sm:w-6 sm:h-6' />
				</Link>
				<Link href={'/'}>
					<TwitterIcon className='w-5 h-5 sm:w-6 sm:h-6' />
				</Link>
				<Link href={'/'}>
					<InstagramIcon className='w-5 h-5 sm:w-6 sm:h-6' />
				</Link>
			</div>
		</footer>
	);
}
