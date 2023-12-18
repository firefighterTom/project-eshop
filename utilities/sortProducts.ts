import { productType } from 'components/MoreProducts/MoreProducts';

const sortFromZToA = (data: productType) => {
	return data.toSorted((a, b) => {
		const fa = a.node.name.toLowerCase();
		const fb = b.node.name.toLowerCase();
		if (fa > fb) {
			return -1;
		}
		if (fa < fb) {
			return 1;
		}
		return 0;
	});
};
const sortFromAToZ = (data: productType) => {
	return data.toSorted((a, b) => {
		const fa = a.node.name.toLowerCase();
		const fb = b.node.name.toLowerCase();
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
};
const sortFromHigherPrice = (data: productType) => {
	return data.toSorted((a, b) => {
		return b.node.price - a.node.price;
	});
};
const sortFromLowerPrice = (data: productType) => {
	return data.toSorted((a, b) => {
		return a.node.price - b.node.price;
	});
};

export const sortProducts = (sortType: string, products: productType) => {
	if (sortType === 'From A-Z') return sortFromAToZ(products);
	if (sortType === 'From Z-A') return sortFromZToA(products);
	if (sortType === 'Price: lowest') return sortFromLowerPrice(products);
	if (sortType === 'Price: highest') return sortFromHigherPrice(products);
};
