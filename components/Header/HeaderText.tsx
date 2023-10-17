import Link from 'next/link';

export function HeaderText() {
	return (
		<>
			<div className='absolute w-full h-full z-20 flex flex-col justify-center items-center text-white '>
				<h1 className='uppercase font-gabarito text-3xl mb-5'>
					Sports equipment
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
					explicabo!
				</p>
				<button className='bg-slate-400 py-2 px-3 mt-2 rounded-md '>
					<Link href={'/'}>View collection</Link>
				</button>
			</div>
			<div className='absolute w-full h-full z-10 bg-black opacity-25 '></div>
		</>
	);
}
