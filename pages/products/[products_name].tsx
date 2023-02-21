import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
type QueryDataProduct = {
	product: {
		price: number;
		name: string;
		id: string;
        images:{
            id:string,
            url:string
        }[]
	}[];
};
const GET_PRODUCTS_BY_SLUG = gql`
	query GETProductBySlug($slug: String!) {
		product(where: { slug: $slug }) {
			name
			price
			images {
				id
				url
			}
			id
		}
	}
`;
export default function ProductPage() {
	const router = useRouter();
	const productName = router.query.products_name;

	const { data } = useQuery<QueryDataProduct>(GET_PRODUCTS_BY_SLUG, {
		variables: { slug: productName },
	});
	if (!data) return <h2>Problem with fetching</h2>;

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
