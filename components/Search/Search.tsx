import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import { CustomHits } from './Components/Hits';
import { CustomSearchBox } from './Components/SearchBox';
import { CustomPoweredBy } from './Components/PoweredBy';

const searchClient = algoliasearch(
	'MD18EQRJ2B',
	'd78cdb5bbe706fb1b1a15f66b2aae98a'
);

export function Search() {
	return (
		<div className='absolute bg-white w-screen h-screen z-[100] flex flex-col items-center'>
			<div className='bg-white w-full max-w-screen-2xl'>
				<InstantSearch searchClient={searchClient} indexName='Products'>
					<CustomSearchBox />
					<CustomHits />
					<CustomPoweredBy />
				</InstantSearch>
			</div>
		</div>
	);
}
