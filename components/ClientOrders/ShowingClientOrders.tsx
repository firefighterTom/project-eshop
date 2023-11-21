import { useGetClientOrdersQuery } from 'generated/graphql';
import { AccordionOrders } from 'components/Accordion/AccordionOrders';

type ShowingClientOrdersProps = {
	clientEmail: string;
};

export function ShowingClientOrders(props: ShowingClientOrdersProps) {
	const data = useGetClientOrdersQuery({
		variables: {
			email: props.clientEmail,
		},
	});
	const numberOfOrders = data.data?.orders.length;
	if (!numberOfOrders)
		return (
			<div className='flex flex-col h-full justify-center items-center text-center'>
				<p className='uppercase font-bold'>
					You haven&apos;t ordered anything yet !
				</p>
			</div>
		);

	return (
		<>
			{data.data &&
				data.data.orders.map((order) => {
					const id = order.id;
					const total = order.total;
					return (
						<div key={id} className='flex flex-col items-center'>
							<AccordionOrders
								orderItems={order.orderItems}
								id={id}
								total={total}></AccordionOrders>
						</div>
					);
				})}
		</>
	);
}
