import { useParams } from "react-router";
import type { Order } from "./OrderHistoryPage";
import { useOrderStore } from "~/state/orderStore";
import { MapPin } from "lucide-react";

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

      <div className="flex">
        <div>Placed</div>
        <div>Packed</div>
        <div>Shipped</div>
        <div>
          <div className="bg-blue-500 rounded-full w-10 p-4 h-10">
            <MapPin className="text-white"/>
          </div>
          Out for delivery
        </div>
        <div>Delivered</div>
        {/* TODO: <div>Cancelled</div> */}
      </div>
      <div>
        {orderDetails?.items.map(item => <div>{item.name}</div>)}
      </div>
    </div>
  );
};
