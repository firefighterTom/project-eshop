import { useShowingComponentContext } from 'context/showingComponent';
import IconClose from '../../assets/icon-close.svg';
import { useConfirmToDeleteItemContext } from 'context/confirmToDeleteItem';

export function ConfirmToRemoveItemFromCart() {
	const context = useShowingComponentContext();
	const contextDeleteItem = useConfirmToDeleteItemContext();

	return (
		<div className='absolute top-0 left-0 w-screen h-screen bg-black/[.33] z-[50]   '>
			<div className=' absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-white flex flex-col w-[15rem] sm:w-[20rem] items-center'>
				<h3 className='text-center mt-8 mb-7 font-bold'>
					Are you sure you want to delete?
				</h3>
				<button
					onClick={() => {
						context.visibilityToggle('confirmToDeleteItemFromCartNotification');
						contextDeleteItem.setData(true);
					}}
					className='uppercase bg-black text-white py-3 w-[80%] font-bold mb-4 text-sm'>
					Delete
				</button>
				<button
					onClick={() =>
						context.visibilityToggle('confirmToDeleteItemFromCartNotification')
					}
					className='uppercase bg-white text-black py-3 w-[80%] font-bold text-sm border mb-8'>
					Cancel
				</button>
				<IconClose
					onClick={() =>
						context.visibilityToggle('confirmToDeleteItemFromCartNotification')
					}
					className='absolute top-[2%] right-[2%] fill-white cursor-pointer'></IconClose>
			</div>
		</div>
	);
}
