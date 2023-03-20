import { Dispatch, SetStateAction } from 'react';
import { schemaProductCart, SchemaProductCart } from './schemaProductCart';

type addedProduct = {
	name: string;
	id: string;
};
type itemsCartType = {
	name: string;
	id: string;
	amount: number;
}[];

// export const addProductToCart = (
// 	element: addedProduct,
// 	items: itemsCartType,
// 	setItems: Dispatch<SetStateAction<itemsCartType>>
// ) => {
// 	const exist = items.find((product) => product.name === element.name);
// 	if (!exist) {
// 		setItems((prev) => [
// 			...prev,
// 			{ name: element.name, id: element.id, amount: 1 },
// 		]);
// 	}
// 	if (exist)
// 		setItems(
// 			items.map((el) =>
// 				el.id === exist?.id ? { ...exist, amount: exist?.amount + 1 } : el
// 			)
// 		);
// };

export function validationLocalStorage(
	setItems: Dispatch<SetStateAction<itemsCartType>>
) {
	const dataLocalStorage = window.localStorage.getItem('cart');
	if (dataLocalStorage !== null && dataLocalStorage !== 'undefined') {
		const parsedCart = JSON.parse(dataLocalStorage) as unknown[];
		const protectedCartFromLocalStorage = parsedCart.filter(
			(product): product is SchemaProductCart => {
				return schemaProductCart.isValidSync(product);
			}
		);
		setItems(protectedCartFromLocalStorage);
	}
}
