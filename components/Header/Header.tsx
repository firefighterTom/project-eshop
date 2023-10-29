import { HeaderText } from './HeaderText';
import SliderHeader from './SliderHeader';

export function Header() {
	return (
		<div className='relative'>
			<HeaderText />
			<SliderHeader></SliderHeader>
		</div>
	);
}
