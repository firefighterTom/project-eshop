import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

import { useAddNotificationContext } from './contextAddNotification';

import { addProductToCart, validationLocalStorage } from './utilsCartContext';
type itemsCartType = {
	name: string;
	id: string;
	amount: number;
	price:number;
}[];
type CartContextType = {
	items: itemsCartType;
	addToCart: (value: addedProduct) => void;
};

type addedProduct = {
	name: string;
	id: string;
	price:number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: PropsWithChildren) {
	const addNotificationContext = useAddNotificationContext();

	const [items, setItems] = useState<itemsCartType>([]);
	useEffect(() => {
		validationLocalStorage(setItems);
	}, []);
	useEffect(() => {
		if (items.length)
			window.localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);

	const addToCart = (element: addedProduct) => {
		addNotificationContext?.showNotification();
		addNotificationContext?.closeOnTimeNotification();
		const chosenProduct = addProductToCart(element, items);
		if (chosenProduct) setItems(chosenProduct);
	};

	return (
		<CartContext.Provider value={{ items, addToCart }}>
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
