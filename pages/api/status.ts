import { NextApiHandler } from 'next';
import Stripe from 'stripe';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { getEnv } from 'utilities/getEnv';
const paymentStatusHandler: NextApiHandler = async (req, res) => {
	const { status, id, amount_total } = JSON.parse(
		req.body
	) as Stripe.Response<Stripe.Checkout.Session>;
	console.log(res);

	const mutation = gql`
		mutation OrderStatus(
			$status: String!
			$stripeCheckoutId: ID!
			$total: String!
		) {
			orderStatus(data:{status:$status,total:$total,orderItems: {connect: {id: $stripeCheckoutId}}}){
                id
            }
		}
	`;
    const client = new ApolloClient({
        uri:getEnv(process.env.HYGRAPH_ADMIN),
        cache: new InMemoryCache(),
        headers:{
            Authorization:`Bearer ${process.env.HYGRAPH_TOKEN}`
        }
        
    });

    

    try {
        const { data } = await client.mutate({
          mutation: mutation,
          variables: {
            status,
            id,
            amount_total,
          },
        });
        console.log('Mutation response:', data);
        return data;
      } catch (error) {
        console.error('Mutation error:', error);
        throw error;
      }
      
};
export default paymentStatusHandler;
