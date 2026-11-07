import { ChevronRight, Dot } from "lucide-react";
import { useNavigate } from "react-router";
import { Badge } from "../commons/Badge";
import { Price } from "../commons/Price";

export interface SingleOrderLineProps {
    orderId: string;
}

export const SingleOrderLine = (props: SingleOrderLineProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/order/${props.orderId}`);
    };

    const orderDeliveryStatus = "on the way";

    return (
        <div onClick={handleClick} className="cursor-pointer flex items-center justify-between">
            {/* TODO: show default image when error loading image */}
            
            <div className="flex gap-2">
                <img className="w-10 rounded-sm" src={"./app/assets/images/mike-meyers--haAxbjiHds-unsplash.jpg"} alt={`item - dawd`} />
                <div>
                    {/* TODO: Show full text on hover */}
                    <div className="w-100 truncate font-medium">Order123</div>
                    <div className="flex text-gray-600 text-sm">Items XYZ + 1 more<Dot/>Sep8, 2026</div>
                </div>
            </div>

            <div className="flex gap-3">
                <Badge text={orderDeliveryStatus} className="bg-blue-200"/>
                <div><Price amount={92} currencyCode="USD" /> </div>
                <ChevronRight className="text-gray-400"/>
            </div>
        </div>
    );
}