import { StateResultsProvided } from 'react-instantsearch-core';
import { connectStateResults } from 'react-instantsearch-dom';

export function Hits({
	allSearchResults,
	searchState,
}: StateResultsProvided<{ name: string; description: string }>) {
	if (!searchState?.query) return <></>;
	return (
		<ul>
			{allSearchResults.hits.map((product) => (
				<li key={product.objectID}>
					<article>
						<h3>{product.name}</h3>
					</article>
				</li>
			))}
		</ul>
	);
}

export const CustomHits = connectStateResults(Hits);
