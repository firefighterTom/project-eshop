import { useEffect, useRef, useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import type { SearchBoxProvided } from 'react-instantsearch-core';
import { useDebounce } from '../Hooks/useDebounce';
import IconClose from '../../../assets/icon-close.svg';
import { useShowingComponentContext } from 'context/showingComponent';
function SearchBox({ refine }: SearchBoxProvided) {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedValue = useDebounce(searchTerm, 300);
	const context = useShowingComponentContext();
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (debouncedValue) {
			refine(debouncedValue);
		}
	}, [debouncedValue, refine]);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<>
			<form noValidate role='search'>
				<label className='flex items-center'>
					<input
						type='text'
						ref={inputRef}
						className='p-2 w-[90%] border-b-2 border-black border-solid'
						placeholder='Search product...'
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<IconClose
						className='w-[40px] h-[40px] pointer'
						onClick={() => context.closeComponent('searchComponent')}
					/>
				</label>
			</form>
		</>
	);
}

export const CustomSearchBox = connectSearchBox(SearchBox);
