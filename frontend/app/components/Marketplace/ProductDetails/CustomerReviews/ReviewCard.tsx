import { getDisplayDate } from "~/utils/dateUtils";
import { Rating } from "./Rating";

export interface ReviewCardProps {
    description: string;
    name: string;
    createdDtm: Date;
    rating: number;
}

export const ReviewCard = (props: ReviewCardProps) => {
    return <div className="border border-gray-200 rounded-lg p-5 cursor-pointer bg-white flex flex-col gap-y-2">
        <div className="flex justify-between">
        <div className="font-semibold">{props.name}</div>
        <div>{getDisplayDate(props.createdDtm)}</div>
        </div>
        <Rating rating={props.rating} showOnlyStars variant={"SMALL"}/>
        <div>{props.description}</div>
    </div>
}