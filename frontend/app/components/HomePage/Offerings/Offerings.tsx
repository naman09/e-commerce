import { OfferingCard } from "./OfferingCard";

const offeringMetadata = [
    {
        title: "Marketplace",
        description: "Quality plumbing parts to keep your systems running smoothly.",
        image: {
            imageUrl: "app/assets/images/public-domain-vectors-IljwEKorx_0-unsplash.jpg",
            imageAlt: "marketplace image"
        }
    },
    {
        title: "Services",
        description: "Professional plumbing services for installation, maintenance, and repair",
        image: {
            imageUrl: "app/assets/images/public-domain-vectors-XRF5dt9ow9Y-unsplash.jpg",
            imageAlt: "Services image"
        }
    },
    {
        title: "Customer Care",
        description: "24/7 Dedicated customer care whenever you need assistance.",
        image: {
            imageUrl: "app/assets/images/public-domain-vectors-myYTi-lKv2Y-unsplash.jpg",
            imageAlt: "Customer Care image"
        }
    },
]

export const Offerings = () => {
    return <div className="space-y-10 my-12">
        <h1 className="text-3xl font-bold">Offerings</h1>
        <div className="flex justify-evenly">
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