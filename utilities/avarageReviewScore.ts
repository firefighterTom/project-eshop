
type ReviewsType={
     rating?: number | null 
}[]

export const averageReviewScore=(reviews:ReviewsType)=>{
const result= Math.round(reviews.reduce((sum, currentValue) => {
				if (currentValue.rating === null || !currentValue.rating) return sum;
				return currentValue.rating + sum;
		  }, 0) / reviews.length)
          return result
}