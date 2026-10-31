export interface BadgeProps {
    text: string;
    className?: string;
}


export const Badge = (props: BadgeProps) => {
    return (
        <div className={`bg-green-200 text-green-800 rounded-md font-semibold px-2 py-1 ${props.className}`}>
            {props.text}
        </div>
    );
}