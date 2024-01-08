import { useEffect, useState } from 'react';
import IconMinus from '../assets/icon-minus.svg';
import IconPlus from '../assets/icon-plus.svg';
import { useCartContext } from 'context/cart';
import { useShowingComponentContext } from 'context/showingComponent';
import { useConfirmToDeleteItemContext } from 'context/confirmToDeleteItem';

type ChangeQuantityOfProductProps = {
	name: string;
	amount: number;
	id: string;
	price: number;
	img: string;
};

export function ChangeQuantityOfProduct(props: ChangeQuantityOfProductProps) {
	const [isClickedToDelete, setIsClickedToDelete] = useState(false);
	const { addToCart, setItems } = useCartContext();
	const context = useShowingComponentContext();
	const contextDeleteItem = useConfirmToDeleteItemContext();

	const subtractOne = () => {
		setItems((state) => {
			return state.map((productItem) => {
				if (productItem.name === props.name) {
					return { ...productItem, amount: props.amount - 1 };
				}
				return productItem;
			});
		});
	};
	const reduceAmountOfProduct = () => {
		if (props.amount > 1) subtractOne();
		if (props.amount === 1) {
			setIsClickedToDelete(true);
			context.visibilityToggle('confirmToDeleteItemFromCartNotification');
		}
	};
	useEffect(() => {
		if (isClickedToDelete && contextDeleteItem.isConfirmed) {
			setIsClickedToDelete(false);
			contextDeleteItem.setData(false);
			subtractOne();
			setItems((state) => {
				return state.filter((productItem) => {
					return productItem.amount > 0;
				});
			});
		}
	}, [contextDeleteItem.isConfirmed, isClickedToDelete]);

	return (
		<div className='flex'>
			<span
				className='flex items-center p-2 border cursor-pointer'
				onClick={() => reduceAmountOfProduct()}>
				<IconMinus />
			</span>
			<p className=' flex justify-center items-center w-10 text-center border-y  '>
				{props.amount}
			</p>
			<span className='flex items-center p-2 border cursor-pointer'>
				<IconPlus
					onClick={() => {
						addToCart({ ...props, amount: 1 });
					}}
				/>
			</span>
		</div>
	);
}
