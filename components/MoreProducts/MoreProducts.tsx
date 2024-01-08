import { useEffect, useState } from 'react';
import { MoreProductsLoader } from './MoreProductsLoader';
import { Product } from '../Product/Product';
import { GetMoreProductsQuery } from 'generated/graphql';
import { sortProducts } from 'utilities/sortProducts';

export type productType = {
	__typename?: string | undefined;
	cursor: string;
	node: {
		__typename?: string | undefined;
		id: string;
		name: string;
		price: number;
		slug: string;
		description: string;
		images: {
			__typename?: string | undefined;
			url: string;
		}[];
		reviews: {
			__typename?: 'Review';
			rating?: number | null;
		}[];
	};
}[];

type MoreProductsProps = {
	currentCursor: string;
	size: number;
	firstProducts: productType;
	selectedValue: string;
};

export function MoreProducts({
	currentCursor,
	size,
	firstProducts,
	selectedValue,
}: MoreProductsProps) {
	const [products, setProducts] = useState<productType>([]);
	const [cursor, setCursor] = useState(currentCursor);
	const [hasNext, setHasNext] = useState(true);
	const [loading, setLoading] = useState(false);
	const [showMoreClicked, setShowMoreClicked] = useState(false);
	useEffect(() => {
		setProducts(firstProducts);
		setCursor(currentCursor);
	}, []);
	const getMore = () => {
		setLoading(true);
		setShowMoreClicked(true);
	};

	const onDataLoaded = (data: GetMoreProductsQuery) => {
		if (data.productsConnection.edges)
			setProducts([...products, ...data.productsConnection.edges]);
		setHasNext(data.productsConnection.pageInfo.hasNextPage);
		if (data.productsConnection.pageInfo.endCursor)
			setCursor(data.productsConnection.pageInfo.endCursor);
		setLoading(false);
		setShowMoreClicked(false);
	};

	const sortedProducts = sortProducts(selectedValue, products);
	return (
		<>
			{showMoreClicked && (
				<MoreProductsLoader
					currentCursor={cursor}
					size={size}
					onDataLoaded={onDataLoaded}
				/>
			)}
			<div className='grid  grid-cols-1 gap-y-4 max-w-screen-xl w-full sm:grid-cols-2 md:grid-cols-3  lg:gap-y-5'>
				{sortedProducts &&
					sortedProducts.map((product) => {
						const productValues = {
							img: product.node.images[0].url,
							name: product.node.name,
							price: product.node.price,
							id: product.node.id,
							reviews: product.node.reviews,
							linkToProduct: `/${product.node.slug}`,
						};

						return <Product key={product.node.id} product={productValues} />;
					})}
			</div>
			{loading && <p>Loading...</p>}
			{hasNext && (
				<button
					className='py-2 px-3 my-5 bg-button-color text-xs text-white rounded hover:bg-button-color/[0.9] sm:text-sm lg:text-base'
					onClick={getMore}>
					Show More
				</button>
			)}
		</>
	);
}
