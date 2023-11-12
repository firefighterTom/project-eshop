import { useCartContext } from 'context/cart';
import { useGetProductBySlugQuery } from 'generated/graphql';
import { useRouter } from 'next/router';
import IconMinus from '../../assets/icon-minus.svg';
import IconPlus from '../../assets/icon-plus.svg';
import { SelectAndDisplay } from 'components/SelectAndDisplay/SelectAndDisplay';
import { Photos } from 'components/Product/components/ProductImages';
import { useState } from 'react';
import { Stars } from 'components/Stars/Stars';
import { averageReviewScore } from 'utilities/avarageReviewScore';

export default function ProductPage() {
	const { addToCart } = useCartContext();
	const [amountOfProducts, setAmountOfProducts] = useState(1);
	const router = useRouter();
	const productName = Array.isArray(router.query.products_name)
		? router.query.products_name[0]
		: router.query.products_name;

	const { data } = useGetProductBySlugQuery({
		variables: { slug: productName ?? '' },
	});
	if (!data?.product) return <h2>Problem with fetching</h2>;
	const avarageReviewsScore = data.product.reviews.length
		? averageReviewScore(data.product.reviews)
		: 0;

		
	return (
		<div className='flex flex-col items-center mt-5'>
			<div className='max-w-[1000px] '>
				<div className=' grid grid-cols-3 w-full sm:grid-cols-2  '>
					<Photos name={data.product.name} images={data.product.images} />
					<h2 className='col-span-full justify-self-center mt-4 uppercase font-bold text-xl sm:row-start-1 sm:col-start-2 sm:justify-self-start'>
						{data.product.name}
					</h2>
					<p className='justify-self-center col-span-full font-bold text-lg text-red-500 sm:row-start-2  sm:col-start-2  sm:justify-self-start '>
						{Intl.NumberFormat('pl-PL', {
							style: 'currency',
							currency: 'PLN',
						}).format(data.product.price)}
					</p>
					<div className=' col-span-full justify-self-center sm:row-start-3 sm:col-start-2 sm:justify-self-start  '>
						<Stars rating={avarageReviewsScore} />
					</div>
					<p className='px-4 col-span-full text-center xs:px-6 sm:px-0  sm:row-start-4 sm:col-start-2 sm:text-left sm:max-w-[30rem]'>
						{data.product.description}
					</p>
					<div className='flex flex-col items-center justify-center col-span-full mt-4 mb-4 gap-3 xs:flex-row sm:col-start-2 sm:justify-start sm:items-stretch '>
						<div className='flex'>
							<span
								className='flex items-center p-2 border cursor-pointer '
								onClick={() => {
									if (amountOfProducts > 1)
										setAmountOfProducts(amountOfProducts - 1);
								}}>
								<IconMinus />
							</span>
							<p className=' flex justify-center items-center w-10 text-center border-y  '>
								{amountOfProducts}
							</p>
							<span className='flex items-center p-2 border cursor-pointer'>
								<IconPlus
									onClick={() => {
										if (amountOfProducts < 10)
											setAmountOfProducts(amountOfProducts + 1);
									}}
								/>
							</span>
						</div>
						<button
							className='p-2 bg-black text-white uppercase'
							onClick={() => {
								if (data.product) {
									const product = {
										name: data.product?.name,
										id: data.product?.id,
										amount: amountOfProducts,
										price: data.product.price,
										img: data.product.images[0].url,
									};
									addToCart(product);
								}
							}}>
							Add to cart
						</button>
					</div>
				</div>
				<SelectAndDisplay
					description={data.product.description}
					productReviews={data.product.reviews}
				/>
			</div>
		</div>
	);
}
