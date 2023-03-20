import { useCartContext } from 'context/contextCart';
import { useGetProductBySlugQuery } from 'generated/graphql';
import { useRouter } from 'next/router';


export default function ProductPage() {
	const { addToCart } = useCartContext();
	const router = useRouter();
	const productName = Array.isArray(router.query.products_name)
		? router.query.products_name[0]
		: router.query.products_name;

	if (productName) {
		const { data } = useGetProductBySlugQuery({
			variables: { slug: productName },
		});
		if (!data) return <h2>Problem with fetching</h2>;

		return (
			<>
				<pre>{JSON.stringify(data, null, 2)}</pre>
				<button
					className='bg-black text-white py-2 px-3 '
					onClick={() => {
						if (data.product) addToCart(data.product);
					}}>
					Add
				</button>
			</>
		);
	}
}
