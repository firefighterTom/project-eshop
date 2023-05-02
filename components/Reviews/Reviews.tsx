import { Stars } from "./Stars";

type ReviewsProps = {
	name: string;
	content: string;
	rating?:number|null
};

export function Reviews(props: ReviewsProps) {
	return (
		<div className='w-40 border border-black text-center'>
			<p>Review</p>
			<p>{props.name}</p>
			<p>{props.content}</p>
			<Stars rating={props.rating}/>
		</div>
	);
}
