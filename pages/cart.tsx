import { useCartContext } from 'context/contextCart';

export default function Cart() {
	const { items } = useCartContext();
	console.log(items)
	return (
		<>
			{items &&
				items.map((product: any) => {
					return <p key={product.name}>{product.name}: {product.amount}</p>;
				})}
		</>
	);
}
