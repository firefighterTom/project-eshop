import Image from 'next/image';
import { PropsWithChildren } from 'react';

export default function AccountWrapper({ children }: PropsWithChildren) {

	
		return (
			<div className=' h-full  relative flex flex-col justify-center items-center '>
				<Image
					src='/tennisBallAndShoes.jpg'
					fill
					className=' -z-10 object-cover '
					alt=''
				/>
				{children}
			</div>
		);
}
