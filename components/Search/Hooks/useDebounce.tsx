import { useEffect, useState } from 'react';

export function useDebounce(value: string | number | undefined, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(timer);
	}, [delay, value]);
	return debouncedValue;
}
