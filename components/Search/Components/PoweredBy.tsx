import React from 'react';
import { usePoweredBy } from 'react-instantsearch';
import Image from 'next/image';
import Link from 'next/link';

export function CustomPoweredBy() {
	const { url } = usePoweredBy();
	return (
		<Link
			href={url}
			className='flex gap-2 justify-end mt-5 mr-[2rem] sm:mr-[10rem]'>
			Search by
			<Image src='/algoliaLogo.png' width={90} height={70} alt='logo'></Image>
		</Link>
	);
}
