import { OfferingCard } from "./OfferingCard";

const offeringMetadata = [
    {
        title: "Marketplace",
        description: "abcd",
        image: {
            imageUrl: "app/assets/images/alaa-turkman-mfO0SRKNzME-unsplash.jpg",
            imageAlt: "marketplace image"
        }
    },
    {
        title: "Services",
        description: "pqrs",
        image: {
            imageUrl: "app/assets/images/alaa-turkman-mfO0SRKNzME-unsplash.jpg",
            imageAlt: "Services image"
        }
    },
    {
        title: "Customer Care",
        description: "abcd",
        image: {
            imageUrl: "app/assets/images/alaa-turkman-mfO0SRKNzME-unsplash.jpg",
            imageAlt: "Customer Care image"
        }
    },
]

export const Offerings = () => {
    return <div className="space-y-5">
        <h1 className="text-3xl font-semibold">Offerings</h1>
        <div className="flex justify-around">
            {offeringMetadata.map((offering, idx) =>
                <OfferingCard 
                    key={idx} 
                    imageUrl={offering.image.imageUrl} 
                    imageAlt={offering.image.imageAlt}
                    title={offering.title} 
                    description={offering.description}
                />
            )}
        </div>
    </div>
}