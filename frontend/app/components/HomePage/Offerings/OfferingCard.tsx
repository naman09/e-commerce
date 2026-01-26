export interface OfferingCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
}

export const OfferingCard = (props: OfferingCardProps) => {
    return <div>
        <img src={props.imageUrl} alt={props.imageAlt} className="border border-gray-100 shadow-md rounded-lg w-full h-100 object-contain"/>
        <div className="mt-4">
            <p className="font-medium">{props.title}</p>
            <p className="text-gray-400">{props.description}</p>
        </div>
    </div>
}