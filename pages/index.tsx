import { SliderProduct } from 'components/Slider/SliderProduct';
import { useGetProductsQuery } from 'generated/graphql';
import { Header } from 'components/Header/Header';
import { BestProduct } from 'components/BestSeller/BestSeller';
export default function Home() {
	const { data, loading, error } = useGetProductsQuery();
	if (!data) return <h2>Problem with fetching</h2>;
	const racketValues = {
		name: data.products[1].name,
		id: data.products[1].id,
		amount: 1,
		img: data.products[1].images[0].url,
		price: data.products[1].price,
	};

	return (
		<>
			<Header />
			<SliderProduct products={data} />
			<BestProduct bestProduct={racketValues} />
		</>
	);
}
