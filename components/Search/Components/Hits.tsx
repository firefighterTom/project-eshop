import { StateResultsProvided } from 'react-instantsearch-core';
import { connectStateResults } from 'react-instantsearch-dom';
import Image from 'next/image';

export function Hits({
	allSearchResults,
	searchState,
}: StateResultsProvided<{
	name: string;
	description: string;
	price: number;
	images: { url: string }[];
	reviews: [];
}>) {
	if (!searchState?.query) return <></>;
	return (
		<ul>
			{allSearchResults.hits.map((product) => (
				<li key={product.objectID}>
					<article className='grid grid-rows-2 grid-cols-[1fr_2fr_1fr] text-sm'>
						<Image
							width={50}
							height={50}
							src={product.images[0].url}
							alt={product.name}
							className=' sm:w-[80px] sm:h-[80px] row-span-full justify-self-center'
						/>
						<h3 className=''>{product.name}</h3>
						<p className=' row-span-full col-start-3 self-center'>
							{Intl.NumberFormat('pl-PL', {
								style: 'currency',
								currency: 'PLN',
							}).format(product.price)}
						</p>
						<p>rating</p>
					</article>
				</li>
			))}
		</ul>
	);
}

export const CustomHits = connectStateResults(Hits);
