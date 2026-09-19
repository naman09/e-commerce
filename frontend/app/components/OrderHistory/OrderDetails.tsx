import { useParams } from "react-router";
import type { Order } from "./OrderHistoryPage";
import { useOrderStore } from "~/state/orderStore";
import { Box, Check, House, MapPin, ShoppingBag, Truck, X } from "lucide-react";
import { OrderStatusStep } from "../commons/OrderStatusStep";

export const OrderDetails = () => {
  const { id } = useParams();

  const orderDetails: Order | undefined = useOrderStore((state) => state.getOrderById)(id);

  return (
    <div className="m-10">
      <div className="flex justify-between">
        <div className="text-gray-600">Order {id}</div>
        
        <div className=" border-gray-100 bg-green-200 text-green-800 rounded-md font-semibold px-2 py-1">on the way</div>
      </div>
      <div className="text-4xl font-bold">Arriving Thursday</div>

      <div className="flex gap-10">
        <OrderStatusStep icon={ShoppingBag} label={"Placed"}/>
        <OrderStatusStep icon={Box} label={"Packed"}/>
        <OrderStatusStep icon={Truck} label={"Shipped"}/>
        <OrderStatusStep icon={MapPin} label={"Out for delivery"}/>
        <OrderStatusStep icon={House} label={"Delivered"}/>
      </div>

      <OrderStatusStep icon={Check} label={"Complete Sample"}/>

      <OrderStatusStep icon={X} label={"Cancelled Sample"}/>
      <div>
        {orderDetails?.items.map(item => <div>{item.name}</div>)}
      </div>
    </div>
  );
};
