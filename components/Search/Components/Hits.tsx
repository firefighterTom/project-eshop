import { StateResultsProvided } from 'react-instantsearch-core';
import { connectStateResults } from 'react-instantsearch-dom';
import Image from 'next/image';
import { Stars } from 'components/Stars/Stars';
import { averageReviewScore } from 'utilities/avarageReviewScore';
import Link from 'next/link';
import { useShowingComponentContext } from 'context/showingComponent';

export function Hits({
	allSearchResults,
	searchState,
}: StateResultsProvided<{
	name: string;
	slug:string;
	description: string;
	price: number;
	images: { url: string }[];
	reviews: { rating: number }[];
}>) {
	const context = useShowingComponentContext();
	if (!searchState?.query) return <></>;
	return (
		<ul>
			{allSearchResults.hits.map((product) => {
				const averageReviewsScore =
					product.reviews.length >= 0 ? averageReviewScore(product.reviews) : 0;
				return (
					<li key={product.objectID} className='py-3 border-b'>
						<Link href={`/products/${product.slug}`} onClick={() => context.visibilityToggle('searchComponent')}>
							<article className='grid grid-rows-2 grid-cols-[1fr_2fr_1fr] text-sm'>
								<Image
									width={30}
									height={30}
									src={product.images[0].url}
									alt={product.name}
									className=' sm:w-[50px] sm:h-[50px] row-span-full justify-self-center'
								/>
								<h3>{product.name}</h3>
								<p className=' row-span-full col-start-3 self-center'>
									{Intl.NumberFormat('pl-PL', {
										style: 'currency',
										currency: 'PLN',
									}).format(product.price)}
								</p>
								<div>
									<Stars rating={averageReviewsScore} />
								</div>
							</article>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export const CustomHits = connectStateResults(Hits);
