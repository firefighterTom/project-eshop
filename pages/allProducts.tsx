import { MoreProducts } from 'components/MoreProducts/MoreProducts';
import { useGetFirstProductsQuery } from 'generated/graphql';
import { ChangeEvent, useState } from 'react';
import { NextSeo } from 'next-seo';
import { title } from 'process';

export default function AllProducts() {
	const productSize = 6;
	const { data } = useGetFirstProductsQuery({
		variables: {
			size: productSize,
		},
	});
	const [selectedValue, setSelectedValue] = useState('From A-Z');
	if (!data) return <h2>Problem with fetching</h2>;
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value);
	};

	return (
		<section>
			<NextSeo
				title='All Products'
				openGraph={{
					url: 'http://localhost:3000/allProudcts',
				}}
			/>
			<h2 className='text-center py-16 text-2xl bg-white-smoke border-y font-merriweather md:py-20 md:text-3xl'>
				All Products
			</h2>
			<div className='flex flex-col items-center mb-5'>
				<div className='flex justify-around items-center my-5 w-full max-w-screen-xl sm:justify-between text-sm md:text-base '>
					<select
						className='py-2 px-3  bg-button-color text-xs text-white rounded hover:bg-button-color/[0.9] sm:text-sm sm:ml-5 lg:text-base'
						value={selectedValue}
						onChange={handleChange}>
						<option value='From A-Z'>From A-Z</option>
						<option value='From Z-A'>From Z-A</option>
						<option value='Price: lowest'>Price: lowest</option>
						<option value='Price: highest'>Price: highest</option>
					</select>
					<p className='text-xs italic sm:mr-5'>Showing z of x results</p>
				</div>

				{data.productsConnection.pageInfo.hasNextPage &&
					data.productsConnection.pageInfo.endCursor && (
						<MoreProducts
							firstProducts={data.productsConnection.edges}
							size={productSize}
							currentCursor={data.productsConnection.pageInfo.endCursor}
							selectedValue={selectedValue}
						/>
					)}
			</div>
		</section>
	);
}
