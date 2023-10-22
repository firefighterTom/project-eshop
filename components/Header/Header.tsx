import { HeaderText } from './HeaderText';
import SliderHeader from './SliderHeader';

export function Header() {
	return (
		<div className='relative z-0'>
			<HeaderText />
			<SliderHeader></SliderHeader>
		</div>
	);
}
