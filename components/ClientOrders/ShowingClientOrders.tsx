import { useGetClientOrdersQuery } from "generated/graphql";

type ShowingClientOrdersProps = {
	clientEmail: string;
};

export function ShowingClientOrders(props: ShowingClientOrdersProps) {
    
    const data =useGetClientOrdersQuery({variables:{
        email:props.clientEmail
    }})
    console.log(data)



	return <>
    </>;
}
