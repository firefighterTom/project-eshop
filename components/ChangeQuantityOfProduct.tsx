import { useEffect, useState } from 'react';
import IconMinus from '../assets/icon-minus.svg';
import IconPlus from '../assets/icon-plus.svg';
import { useCartContext } from 'context/cart';
import { useShowingComponentContext } from 'context/showingComponent';
import { useConfirmToDeleteItemContext } from 'context/confirmToDeleteItem';

type ChangeQuantityOfProductProps = {
	name: string;
	amount: number;
};

export function ChangeQuantityOfProduct(props: ChangeQuantityOfProductProps) {
	const [amountOfProduct, setAmountOfProduct] = useState(props.amount);
	const [isClickedToDelete, setIsClickedToDelete] = useState(false);
	const { setItems } = useCartContext();
	const context = useShowingComponentContext();
	const contextDeleteItem = useConfirmToDeleteItemContext();

	useEffect(() => {
		const currentProductAndAmount = {
			name: props.name,
			amount: amountOfProduct,
		};
		setItems((state) => {
			return state.map((productItem) => {
				if (productItem.name === currentProductAndAmount.name) {
					return { ...productItem, amount: currentProductAndAmount.amount };
				}
				return productItem;
			});
		});
		setItems((state) => {
			return state.filter((productItem) => {
				return productItem.amount > 0;
			});
		});
	}, [amountOfProduct]);

	useEffect(() => {
		if (isClickedToDelete && contextDeleteItem.isConfirmed) {
			setAmountOfProduct(amountOfProduct - 1);
			setIsClickedToDelete(false);
			contextDeleteItem.setData(false);
		}
	}, [contextDeleteItem.isConfirmed, isClickedToDelete]);

	return (
		<div className='flex'>
			<span
				className='flex items-center p-2 border cursor-pointer'
				onClick={() => {
					if (amountOfProduct > 1) setAmountOfProduct(amountOfProduct - 1);
					if (amountOfProduct === 1) {
						setIsClickedToDelete(true);
						context.visibilityToggle('confirmToDeleteItemFromCartNotification');
					}
				}}>
				<IconMinus />
			</span>
			<p className=' flex justify-center items-center w-10 text-center border-y  '>
				{amountOfProduct}
			</p>
			<span className='flex items-center p-2 border cursor-pointer'>
				<IconPlus
					onClick={() => {
						setAmountOfProduct(amountOfProduct + 1);
					}}
				/>
			</span>
		</div>
	);
}
