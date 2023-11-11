type TotalPriceParameter = {
	price: number;
	amount: number;
}[];

export function countTotalPrice(items: TotalPriceParameter) {
	return items.reduce((prevValue, currentValue) => {
		return prevValue + currentValue.amount * currentValue.price;
	}, 0);
}
