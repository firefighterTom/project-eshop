import { Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

import { addProductToCart, validationLocalStorage } from './utilsCartContext';
import { useShowingComponentContext } from './showingComponent';
type itemsCartType = {
	name: string;
	id: string;
	amount: number;
	price: number;
	img: string;
}[];
type CartContextType = {
	items: itemsCartType;
	addToCart: (value: addedProduct) => void;
	setItems:Dispatch<SetStateAction<itemsCartType>>
};

type addedProduct = {
	name: string;
	id: string;
	amount: number;
	price: number;
	img: string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: PropsWithChildren) {
	const context = useShowingComponentContext();

	const [items, setItems] = useState<itemsCartType>([]);
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

	const addToCart = (element: addedProduct) => {
		context.visibilityToggle('addedToCartNotificationComponent');
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
