import { Avatar } from "~/components/commons/Avatar";
import type { Testimony } from "./CustomerTestimonies"

export interface TestimonyCard {
    testimony : Testimony;
}

export const TestimonyCard = (props: TestimonyCard) => {
    return <div className="border border-gray-100 shadow-md rounded-lg h-80 py-16 px-10 w-1/4 space-y-16">
        <p className="line-clamp-4 text-center">{props.testimony.text}</p>
        <Avatar userId={props.testimony.userId}/>
    </div>
}