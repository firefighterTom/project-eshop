import Link from 'next/link';
const linkNav = [
	{ link: '/', linkName: 'Home' },
	{ link: '/cart', linkName: 'Cart' },
];
export function Nav() {
	return (
		<div className='flex justify-around py-6 bg-black text-white '>
			{linkNav.map((el) => {
				return <Link key={el.linkName} href={`${el.link}`}>{el.linkName}</Link>;
			})}
		</div>
	);
}
