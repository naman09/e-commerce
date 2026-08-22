import { Star } from "lucide-react";

export interface RatingProps {
  rating: number;
  showOnlyStars?: boolean 
  variant: 'SMALL' | 'BIG';
}

export const Rating = (props: RatingProps) => {

  if (props.variant === "BIG") {
    return (
      <div className="flex flex-col items-center gap-1">
        <p className="text-6xl font-medium">{props.rating}</p>

        <div className="flex gap-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= props.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-400">out of 5</p>
      </div>
    )
  }

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

      { !props.showOnlyStars && <p className="text-xs">{props.rating}</p> }
    </div>
  );
};
