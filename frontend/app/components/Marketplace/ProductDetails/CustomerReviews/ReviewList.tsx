import { Rating } from "./Rating";
import { RatingCard } from "./RatingCard";

export interface Review {
    description: string;
    userId: string;
    rating: number;
    createdDtm: Date;
    id: string;
}

const mockReviews : Review[] = [
    {
        "description": "Incredibly comfortable for long runs. I did a half marathon in these and my feet felt great the whole way. The cushioning is responsive without feeling spongy.",
        "userId": "1",
        "rating": 4,
        "createdDtm": new Date(),
        "id": "1"
    },
    {
        "description": "Great fit and very light on the foot. The toe box is slightly narrow for my wide feet — I'd recommend going half a size up if you have wider feet. Otherwise a solid shoe.",
        "userId": "2",
        "rating": 1.3,
        "createdDtm": new Date(),
        "id": "2"
    },
    {
        "description": "Switched from a popular competitor and I'm not going back. The breathability is excellent — no hot spots even on summer runs. Looks great too.",
        "userId": "3",
        "rating": 3,
        "createdDtm": new Date(),
        "id": "3"
    },
    {
        "description": "Incredibly comfortable for long runs. I did a half marathon in these and my feet felt great the whole way. The cushioning is responsive without feeling spongy.",
        "userId": "6",
        "rating": 4,
        "createdDtm": new Date(),
        "id": "4"
    },
    {
        "description": "Incredibly comfortable for long runs. I did a half marathon in these and my feet felt great the whole way. The cushioning is responsive without feeling spongy.",
        "userId": "7",
        "rating": 6,
        "createdDtm": new Date(),
        "id": "5"
    },
    {
        "description": "Incredibly comfortable for long runs. I did a half marathon in these and my feet felt great the whole way. The cushioning is responsive without feeling spongy.",
        "userId": "8",
        "rating": 7,
        "createdDtm": new Date(),
        "id": "6"
    }
]

export const ReviewList = () => {
    return <div>
        {mockReviews.map(review => <RatingCard 
            key={review.id} 
            description = {review.description}
            name="Abc"
            createdDtm = {review.createdDtm}
            rating={review.rating}
        />)}
    </div>
}