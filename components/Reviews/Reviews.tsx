import { Stars } from './Stars';

type ReviewsProps = {
	name: string;
	content: string;
	rating?: number | null;
};

export function Reviews(props: ReviewsProps) {
	return (
		<div className=' p-2 w-[15rem] m-auto shadow-[5px_5px_5px_rgba(0,0,0,0.3)] text-center '>
			<p className='font-bold'>{props.name}</p>
			<p className=''>{props.content}</p>
			<Stars rating={props.rating} />
		</div>
	);
}
