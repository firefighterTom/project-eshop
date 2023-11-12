import Star from './../../assets/star.svg';

type RatingProp = {
	rating?: number | null;
};
export function Stars(props: RatingProp) {
	return (
		<ul className='flex '>
			{[1, 2, 3, 4, 5].map((el) => {
				if (props.rating)
					return (
						<li key={el}>
							{props.rating >= el ? (
								<Star className='fill-gold stroke-gold w-4 h-4' />
							) : (
								<Star className='stroke-black w-4 h-4' />
							)}
						</li>
					);
				return (
					<li key={el}>
						<Star className=' stroke-black w-4 h-4' />
					</li>
				);
			})}
		</ul>
	);
}
