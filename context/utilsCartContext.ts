import { Dispatch, SetStateAction } from 'react';
import { schemaProductCart, SchemaProductCart } from '../schema/schemaProductCart';

type addedProduct = {
	name: string;
	id: string;
	price:number;
	amount:number,
	img:string
};
 export type itemsCartType = {
	name: string;
	id: string;
	amount: number;
	price:number;
	img:string
}[];

export const addProductToCart = (
	element: addedProduct,
	items: itemsCartType
) => {
	const exist = items.find((product) => product.name === element.name);
	if (!exist) {
		return [...items, { name: element.name, id: element.id, amount: element.amount,price:element.price, img:element.img  }];
		
	}
	const actualCart = items.map((el) =>
		el.id === exist?.id ? { ...exist, amount: exist?.amount + element.amount } : el
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
