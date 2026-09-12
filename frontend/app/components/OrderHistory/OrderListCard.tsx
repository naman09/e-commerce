import { useNavigate } from "react-router";

export interface OrderListCardProps {
    orderId: string;
}

export const OrderListCard = (props: OrderListCardProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/order/${props.orderId}`);
    };

    return <div onClick={handleClick} className="border cursor-pointer">
        <p>order name</p>
        3 dots for more info
    </div>
}