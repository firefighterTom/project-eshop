import { useAddNotificationContext } from 'context/contextAddNotification';


export function AddNotification() {
	const addNotificationContext = useAddNotificationContext();

	return (
		<div className='border-4 border-solid border-black flex flex-col'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-square-x cursor-pointer self-end'
				onClick={addNotificationContext?.closeAddNotification}
				width={24}
				height={24}
				viewBox='0 0 24 24'
				strokeWidth='1.25'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
				<path d='M10 10l4 4m0 -4l-4 4'></path>
			</svg>
			<p className='self-center'>Success</p>
		</div>
	);
}
