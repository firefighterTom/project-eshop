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
						<li>
							{props.rating > el ? (
								<Star
									key={el}
									className='fill-gold stroke-gold w-5 h-5'
								/>
							) : (
								<Star key={el} className='stroke-black w-5 h-5' />
							)}
						</li>
					);
				return <Star key={el} className=' stroke-black w-5 h-5' />;
			})}
		</ul>
	);
}
