import { Notification } from 'components/Notification/Notification';
import { Reviews } from 'components/Reviews/Reviews';
import { useAddNotificationContext } from 'context/contextAddNotification';
import { useCartContext } from 'context/contextCart';
import { useGetProductBySlugQuery } from 'generated/graphql';
import { useRouter } from 'next/router';

export default function ProductPage() {
	const { addToCart } = useCartContext();
	const addNotificationContext = useAddNotificationContext();
	const router = useRouter();
	const productName = Array.isArray(router.query.products_name)
		? router.query.products_name[0]
		: router.query.products_name;

	const { data } = useGetProductBySlugQuery({
		variables: { slug: productName ?? '' },
	});
	if (!data) return <h2>Problem with fetching</h2>;
	return (
		<>
			{/* {addNotificationContext?.isOpen && <Notification />} */}

			<pre>{JSON.stringify(data, null, 2)}</pre>
			<ul>
				{data.reviews.map((rev) => {
					return (
						<li key={rev.id}>
							<Reviews
								name={rev.name}
								content={rev.content}
								rating={rev.rating}
							/>
						</li>
					);
				})}
			</ul>
			<Reviews name={data.reviews[0].name} content={data.reviews[0].content} />
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
