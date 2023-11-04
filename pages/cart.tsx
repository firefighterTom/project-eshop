import { useCartContext } from 'context/cart';
export default function Cart() {
	const { items } = useCartContext();
	return (
		<>
			{items &&
				items.map((product) => {
					return (
						<p key={product.name}>
							{product.name}: {product.amount}
						</p>
					);
				})}
		</>
	);
}
