export interface OfferingCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
}

export const OfferingCard = (props: OfferingCardProps) => {
    return <div>
        <img src={props.imageUrl} alt={props.imageAlt} className="w-full h-100 object-contain justify-self-center"/>
        <p className="justify-self-center">{props.title}</p>
        <p className="justify-self-center">{props.description}</p>
    </div>
}