import { Stars } from '../Stars/Stars';

type ReviewsProps = {
	name: string;
	content: string;
	rating?: number | null;
};

export function Reviews(props: ReviewsProps) {
	return (
		<div className='flex flex-col items-center p-2  shadow-2xl rounded '>
			<p className='font-bold'>{props.name}</p>
			<p className=' px-2 pb-2 mb-2 w-full border-b italic'>{props.content}</p>
			<Stars rating={props.rating} />
		</div>
	);
}
