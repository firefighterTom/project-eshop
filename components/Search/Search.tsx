import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, PoweredBy } from 'react-instantsearch-dom';
import { CustomHits } from './Components/Hits';
import { CustomSearchBox } from './Components/SearchBox';

const searchClient = algoliasearch(
	'MD18EQRJ2B',
	'd78cdb5bbe706fb1b1a15f66b2aae98a'
);

export function Search() {
	return (
		<InstantSearch searchClient={searchClient} indexName='Products'>
			<CustomSearchBox/>
			<CustomHits />
            <PoweredBy/>
		</InstantSearch>
	);
}
