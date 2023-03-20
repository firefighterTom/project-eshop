import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { validationLocalStorage } from './utilsCartContext';

type CartContextType = {
	items: { name: string }[];
	addToCart: (value: addedProduct) => void;
};
type itemsCartType = {
	name: string;
	id: string;
	amount: number;
}[];
type addedProduct = {
	name: string;
	id: string;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: PropsWithChildren) {
	const [items, setItems] = useState<itemsCartType>([]);
	useEffect(() => {
		validationLocalStorage(setItems);
	}, []);
	useEffect(() => {
		if (items.length)
			window.localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);
	const addToCart = (element: addedProduct) => {
		const exist = items.find((product) => product.name === element.name);
		if (!exist) {
			setItems((prev) => [
				...prev,
				{ name: element.name, id: element.id, amount: 1 },
			]);
		}
		if (exist)
			setItems(
				items.map((el) =>
					el.id === exist?.id ? { ...exist, amount: exist?.amount + 1 } : el
				)
			);
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

