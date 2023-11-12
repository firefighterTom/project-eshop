import { Product } from 'components/Product/Product';
import { useGetProductsQuery } from 'generated/graphql';

export default function AllProducts() {
	const { data } = useGetProductsQuery();
	if (!data) return <h2>Problem with fetching</h2>;

	return (
		<section>
			<h2 className='text-center py-16 text-2xl bg-white-smoke border-y font-merriweather md:py-20 md:text-3xl'>
				All Products
			</h2>
			<div className='flex flex-col items-center mb-5'>
				<div className='flex justify-around items-center my-5 w-full max-w-screen-xl sm:justify-between text-sm md:text-base   '>
					<select className=' py-2 px-3  bg-button-color text-xs text-white rounded hover:bg-button-color/[0.9] sm:text-sm sm:ml-5 lg:text-base'>
						<option value='default'>Defualt sorting</option>
						<option value='From A-Z'>From A-Z</option>
						<option value='From Z-A'>From Z-A</option>
						<option value='Price: lowest'>Price: lowest</option>
						<option value='Price: highest'>Price: highest</option>
					</select>
					<p className='text-xs italic sm:mr-5'>Showing z of x results</p>
				</div>

				<div className='grid  grid-cols-1 gap-y-4 max-w-screen-xl w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-5'>
					{data.products.map((product) => {
						const productValues = {
							img: product.images[0].url,
							name: product.name,
							price: product.price,
							id: product.id,
							reviews: product.reviews,
							linkToProduct: `/${product.slug}`,
						};

						return <Product key={product.id} product={productValues}></Product>;
					})}
				</div>
				<button className='py-2 px-3 my-5 bg-button-color text-xs text-white rounded hover:bg-button-color/[0.9] sm:text-sm lg:text-base'>
					Show more
				</button>
			</div>
		</section>
	);
}
