import { useCartContext } from 'context/cart';
import { useGetProductBySlugQuery } from 'generated/graphql';
import { useRouter } from 'next/router';
import IconMinus from '../../assets/icon-minus.svg';
import IconPlus from '../../assets/icon-plus.svg';
import { SelectAndDisplay } from 'components/SelectAndDisplay';
import { Photos } from 'components/ProductPhotos';
import { useState } from 'react';

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
	return (
		<div className='flex flex-col items-center mt-5'>
			<div className='max-w-[1000px] '>
				<div className=' w-full grid grid-cols-3 sm:grid-cols-2  '>
					<Photos name={data.product.name} img={data.product.images[0].url} />
					<h2 className='col-span-full justify-self-center sm:row-start-1 sm:col-start-2 sm:justify-self-start uppercase font-bold mt-4 text-xl'>
						{data.product.name}
					</h2>
					<p className='justify-self-center col-span-full sm:row-start-2  sm:col-start-2  sm:justify-self-start font-bold text-lg text-red-500 '>
						{Intl.NumberFormat('pl-PL', {
							style: 'currency',
							currency: 'PLN',
						}).format(data.product.price)}
					</p>
					<p className=' col-span-full sm:row-start-3 sm:col-start-2 sm:justify-self-start justify-self-center '>
						@@@@@
					</p>
					<p className='px-4 xs:px-6 sm:px-0 col-span-full text-center sm:row-start-4 sm:col-start-2 sm:text-left sm:max-w-[30rem]'>
						{data.product.description}
					</p>
					<div className='flex flex-col items-center mt-4 mb-4 gap-3 xs:flex-row justify-center col-span-full sm:col-start-2 sm:justify-start sm:items-stretch '>
						<div className='flex'>
							<span
								className='border flex items-center p-2 cursor-pointer '
								onClick={() => {
									if (amountOfProducts > 1)
										setAmountOfProducts(amountOfProducts - 1);
								}}>
								<IconMinus />
							</span>
							<p className=' w-10 text-center border-y flex justify-center items-center  '>
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
							className='bg-black text-white uppercase p-2'
							onClick={() => {
								if (data.product) {
									const product = {
										name: data.product?.name,
										id: data.product?.id,
										amount: amountOfProducts,
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
					productReviews={data.reviews}
				/>
			</div>
		</div>
	);
}
