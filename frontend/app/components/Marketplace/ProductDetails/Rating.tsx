import { Star } from "lucide-react";

export interface RatingProps {
    rating: number;
}

export const Rating = (props: RatingProps) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                key={star}
                className={`h-3 w-3 ${
                    star <= props.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
                />
            ))}

            <p className="text-xs">{props.rating}</p>
        </div>
    );
}