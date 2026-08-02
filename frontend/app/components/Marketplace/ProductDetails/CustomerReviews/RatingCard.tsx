export interface RatingCardProps {
    description: string;
    name: string;
    createdDtm: Date;
    rating: number;
}

export const RatingCard = (ratingCardProps: RatingCardProps) => {
    return <div>
        {ratingCardProps.rating}
        {ratingCardProps.description}
    </div>
}