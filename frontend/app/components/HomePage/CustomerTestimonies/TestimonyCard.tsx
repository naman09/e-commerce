import { Avatar } from "~/components/commons/Avatar";
import type { Testimony } from "./CustomerTestimonies"

export interface TestimonyCard {
    testimony : Testimony;
}

export const TestimonyCard = (props: TestimonyCard) => {
    return <div className="border border-gray-100 shadow-md rounded-lg h-full p-8">
        <p>{props.testimony.text}</p>
        <p>{props.testimony.userId}</p>
        <Avatar userId={props.testimony.userId}/>
    </div>
}