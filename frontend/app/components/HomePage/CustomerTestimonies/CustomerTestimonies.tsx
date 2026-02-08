import { TestimonyCard } from "./TestimonyCard";

export interface Testimony {
    text: string;
    userId: string;
}

const testimonies: Testimony[] = [
    {
        "text": "I went with Kaspersky because I heard it would be light on my resources. I thought I might sacrifice some protection – but this was not the case!",
        "userId": "P1"
    },
    {
        "text": "I feel like I get just as much if not more protection than any competitors offer. All while running very quietly in the background",
        "userId": "P2"
    },
    {
        "text": "A great product for everyone, Kaspersky is easy to use and gives you all-round protection. I like the straightforward way it carries out updates and fixes errors.",
        "userId": "P3"
    }
]

export const CustomerTestimonies = () => {
    return <div className="space-y-5">
        <h1 className="text-3xl font-semibold">Customer Testimonies</h1>
        <div className="flex justify-center space-x-8">
            {testimonies.map((testimony) =>
                <TestimonyCard
                    key={testimony.userId}
                    testimony={testimony}
                />
            )}
        </div>
    </div>
}