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
		<>
			<div className='absolute  bg-white  w-full left-0 top-0 h-screen z-20  '>
				<InstantSearch searchClient={searchClient} indexName='Products'>
					<CustomSearchBox />
					<CustomHits />
					<CustomPoweredBy/>
				</InstantSearch>
			</div>
		</>
	);
}
