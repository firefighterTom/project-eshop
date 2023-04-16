import { useGetProductsQuery } from 'generated/graphql';
import Link from 'next/link';
import LoginPage from './loginPage';
export default function Home() {
	const { data, loading, error } = useGetProductsQuery();
	if (!data) return <h2>Problem with fetching</h2>;
	return data.products.map(({ slug, name, id }) => (
		<Link key={id} href={`products/${slug}`}>
			<h2>{name}</h2>
		</Link>
	));
}
