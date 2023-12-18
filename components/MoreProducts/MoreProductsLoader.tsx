import {
	GetMoreProductsQuery,
	useGetMoreProductsQuery,
} from 'generated/graphql';
import { useEffect } from 'react';

type MoreProductsLoaderProps = {
	currentCursor: string;
	size: number;
	onDataLoaded: (value: GetMoreProductsQuery) => void;
};

export function MoreProductsLoader({
	currentCursor,
	size,
	onDataLoaded,
}: MoreProductsLoaderProps) {
	const { data } = useGetMoreProductsQuery({
		variables: {
			cursor: currentCursor,
			size: size,
		},
	});

	useEffect(() => {
		if (data) {
			onDataLoaded(data);
		}
	}, [data, onDataLoaded]);

	return null;
}
