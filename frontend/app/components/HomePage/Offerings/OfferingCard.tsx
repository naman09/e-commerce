export interface OfferingCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
}

export const OfferingCard = (props: OfferingCardProps) => {
    return <div className="w-100">
        <img src={props.imageUrl} alt={props.imageAlt} className="border border-gray-100 shadow-md rounded-lg h-100 object-contain"/>
        <div className="mt-4">
            <p className="font-medium text-center">{props.title}</p>
            <p className="text-gray-500 text-center">{props.description}</p>
        </div>
    </div>
}