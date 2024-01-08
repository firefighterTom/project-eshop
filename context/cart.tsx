import { Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

import { addProductToCart, validationLocalStorage } from './utilsCartContext';
type ItemsCartType = {
	name: string;
	id: string;
	amount: number;
	price: number;
	img: string;
}[];
type CartContextType = {
	items: ItemsCartType;
	addToCart: (value: AddedProduct) => void;
	setItems:Dispatch<SetStateAction<ItemsCartType>>
};

type AddedProduct = {
	name: string;
	id: string;
	amount: number;
	price: number;
	img: string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: PropsWithChildren) {

	const [items, setItems] = useState<ItemsCartType>([]);
	useEffect(() => {
		try {
			validationLocalStorage(setItems);
		} catch (error) {
			setItems([]);
		}
	}, []);
	useEffect(() => {
		if (items.length)
			window.localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);

	const addToCart = (element: AddedProduct) => {
		
		const chosenProduct = addProductToCart(element, items);
		if (chosenProduct) setItems(chosenProduct);
	};

	return (
		<CartContext.Provider value={{ items,setItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export const useCartContext = () => {
	const cartContext = useContext(CartContext);
	if (cartContext === undefined) {
		throw new Error('CartContext is undefined');
	}
	return cartContext;
};
