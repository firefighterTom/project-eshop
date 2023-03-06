import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import * as yup from 'yup';
import { createContext } from 'react';
type CartContextType = {
	items: { name: string }[];
	addToCart: (value: string) => void;
};
const schemaLocalStorage = yup.array().max(3, 'Too much items');
type itemsCartType = {
	name: string;
}[];
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: PropsWithChildren) {
	const [items, setItems] = useState<itemsCartType>([]);
	useEffect(() => {
		const dataLocalStorage = window.localStorage.getItem('cart');

		if (dataLocalStorage !== null && dataLocalStorage !== 'undefined') {
			setItems(JSON.parse(dataLocalStorage));
			// schemaLocalStorage.isValid(JSON.parse(dataLocalStorage)).then((res) => {
			// 	if (res) {
					
			// 	}
			// });
		}
	}, []);
	useEffect(() => {
		if (items.length > 0)
			window.localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);
	const addToCart = (name: string) => {
		if (!items.find((product) => product.name === name))
			setItems((prev) => [...prev, { name }]);
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
