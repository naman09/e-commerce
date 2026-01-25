import { TestimonyCard } from "./TestimonyCard";

export interface Testimony {
    text: string;
    userId: string;
}

const testimonies: Testimony[] = [
    {
        "text": "abccc",
        "userId": "P1"
    },
    {
        "text": "yuiodwad",
        "userId": "P2"
    },
    {
        "text": "1124124",
        "userId": "P3"
    }
]

export const CustomerTestimonies = () => {
    return <div className="space-y-5">
        <h1 className="text-3xl font-semibold">Customer Testimonies</h1>
        <div className="flex justify-around">
            {testimonies.map((testimony) =>
                <TestimonyCard
                    key={testimony.userId}
                    testimony={testimony}
                />
            )}
        </div>
    </div>
}