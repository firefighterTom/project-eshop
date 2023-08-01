import { Dispatch, SetStateAction } from 'react';
import { schemaProductCart, SchemaProductCart } from './schemaProductCart';

type addedProduct = {
	name: string;
	id: string;
	price:number;
};
export type itemsCartType = {
	name: string;
	id: string;
	amount: number;
	price:number;
}[];

export const addProductToCart = (
	element: addedProduct,
	items: itemsCartType
) => {
	const exist = items.find((product) => product.name === element.name);
	if (!exist) {
		return [...items, { name: element.name, id: element.id, amount: 1,price:element.price  }];
	}
	const actualCart = items.map((el) =>
		el.id === exist?.id ? { ...exist, amount: exist?.amount + 1 } : el
	);

	return actualCart;
};

export function validationLocalStorage(
	setItems: Dispatch<SetStateAction<itemsCartType>>
) {
	const dataLocalStorage = window.localStorage.getItem('cart');
	if (dataLocalStorage !== null) {
		const parsedCart = JSON.parse(dataLocalStorage) as unknown[];
		const protectedCartFromLocalStorage = parsedCart.filter(
			(product): product is SchemaProductCart => {
				return schemaProductCart.isValidSync(product);
			}
		);
		setItems(protectedCartFromLocalStorage);
	}
}
