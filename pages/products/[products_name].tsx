import { useGetProductBySlugQuery } from 'generated/graphql';
import { useRouter } from 'next/router';

export default function ProductPage() {
	const router = useRouter();
	const productName = Array.isArray(router.query.products_name)
		? router.query.products_name[0]
		: router.query.products_name;
	if (productName) {
		const { data } = useGetProductBySlugQuery({
			variables: { slug: productName },
		});
		if (!data) return <h2>Problem with fetching</h2>;

		return <pre>{JSON.stringify(data, null, 2)}</pre>;
	}
}
