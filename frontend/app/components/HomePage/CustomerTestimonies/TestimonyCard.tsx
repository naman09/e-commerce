import type { Testimony } from "./CustomerTestimonies"

export interface TestimonyCard {
    testimony : Testimony;
}

export const TestimonyCard = (props: TestimonyCard) => {
    return <>
        <h1>TestimonyCard</h1>
    </>
}