import { useState } from 'react';
import IconOpenMenuBar from '../../assets/icon-open.svg';
import { PanelMenu } from './PanelMenu';

export function ButtonPanelMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const closePanelMenu = () => {
		setIsOpen(false);
	};

	return (
		<div className='basis-[30%]'>
			<button className='' onClick={() => setIsOpen(true)}>
				<IconOpenMenuBar className='w-6 h-6 xs:w-[30px] xs:h-[30px] md:w-[35px] md:h-[35px]' />
			</button>
			{isOpen && <PanelMenu closePanelMenu={closePanelMenu} />}
		</div>
	);
}
