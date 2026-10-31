import { Dot } from "lucide-react";
import { useNavigate } from "react-router";
import { Badge } from "../commons/Badge";

export interface SingleOrderLineProps {
    orderId: string;
}

export const SingleOrderLine = (props: SingleOrderLineProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/order/${props.orderId}`);
    };

    return (
        <div onClick={handleClick} className="cursor-pointer flex">
            {/* TODO: show default image when error loading image */}
            <img className="w-10" src={"./app/assets/images/danilo-alvesd-YPuCba3I9GQ-unsplash.jpg"} alt={`item - dawd`} />
            <div>
                {/* TODO: Show full text on hover */}
                <div className="w-100 truncate font-medium">Order123</div>
                <div className="flex text-gray-600 text-sm">Items XYZ + 1 more<Dot/>Sep8, 2026</div>
            </div>
            <Badge text="on the way" className="bg-blue-200"/>
            3 dots for more info
        </div>
    );
}