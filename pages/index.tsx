import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { type } from 'os';

const GET_PRODUCTS = gql`
	query GetProducts {
		products {
			id
			name
			price
			slug
		}
	}
`;
type GetProductsResult = {
	products: {
		slug: string;
		name: string;
		id: string;
	}[];
};
export default function Home() {
	const { data, loading, error } = useQuery<GetProductsResult>(GET_PRODUCTS);
	if (!data) return <h2>Problem with fetching</h2>;
	return data.products.map(({ slug, name, id }) => (
		<Link key={id} href={`products/${slug}`}>
			<h2>{name}</h2>
		</Link>
	));
}
