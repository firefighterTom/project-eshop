import { useEffect, useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import type { SearchBoxProvided } from 'react-instantsearch-core';
import { useDebounce } from '../Hooks/useDebounce';
function SearchBox({ refine }: SearchBoxProvided) {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedValue = useDebounce(searchTerm, 300);

	useEffect(() => {
		if (debouncedValue) {
			refine(debouncedValue);
		}
	}, [debouncedValue, refine]);
	return (
		<>
			<form noValidate role='search'>
				<input type='text' onChange={(e) => setSearchTerm(e.target.value)} />
			</form>
		</>
	);
}

export const CustomSearchBox = connectSearchBox(SearchBox);
