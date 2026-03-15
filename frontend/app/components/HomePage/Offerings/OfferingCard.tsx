export interface OfferingCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
}

export const OfferingCard = (props: OfferingCardProps) => {
    return <div className="w-100 group cursor-pointer">
        <img src={props.imageUrl} alt={props.imageAlt} className="border border-gray-100 transition duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-105 shadow-md rounded-lg h-100 object-contain"/>
        <div className="mt-4">
            <p className="font-medium text-center group-hover:text-black text-lg">{props.title}</p>
            <p className="text-gray-500 text-center group-hover:text-black">{props.description}</p>
        </div>
    </div>
}