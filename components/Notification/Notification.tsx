import { useAddNotificationContext } from 'context/contextAddNotification';
import  IconClose  from './assets/icon-close.svg';

export function Notification() {
	const addNotificationContext = useAddNotificationContext();

	return (
		<div
			role='alert'
			className='border-4 border-solid border-black flex flex-col'>
			<IconClose
				onClick={addNotificationContext?.closeNotification}
				width={24}
				height={24}
				className='icon icon-tabler icon-tabler-square-x cursor-pointer self-end'></IconClose>
			<p className='self-center'>Success</p>
		</div>
	);
}
