export interface OfferingCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
}

export const OfferingCard = (props: OfferingCardProps) => {
    return <div>
        <img src={props.imageUrl} alt={props.imageAlt} />
        <p>{props.title}</p>
        <p>{props.description}</p>
    </div>
}