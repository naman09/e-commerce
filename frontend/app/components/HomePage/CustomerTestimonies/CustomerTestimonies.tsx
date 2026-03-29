import { TestimonyCard } from "./TestimonyCard";

export interface Testimony {
  text: string;
  userId: string;
}

const testimonies: Testimony[] = [
  {
    text: "Great experience from start to finish. The team helped me find the exact plumbing parts I needed and the service was quick and professional",
    userId: "P1",
  },
  {
    text: "Reliable service and very knowledgeable staff. They fixed a leak in my kitchen within hours and explained everything clearly.",
    userId: "P2",
  },
  {
    text: "Their customer service is outstanding. They guided me through choosing the right fittings and saved me a lot of time.",
    userId: "P3",
  },
];

export const CustomerTestimonies = () => {
  return (
    <div className="space-y-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold">What our customers says</h1>
      <div className="flex justify-center space-x-8">
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.userId} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};
