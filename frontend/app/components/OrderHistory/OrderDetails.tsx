import { useParams } from "react-router";
import type { Order } from "./OrderHistoryPage";
import { useOrderStore } from "~/state/orderStore";
import { Box, Check, House, MapPin, ShoppingBag, Truck, X, type LucideProps } from "lucide-react";
import { OrderStatusStep } from "../commons/OrderStatusStep";
import type { ForwardRefExoticComponent, RefAttributes } from "react";


export interface OrderStatusStepDetails {
  // TODO: make stepLabel as enum. It is used in multiple places. Enum will make sure name changes are easy
  stepLabel: "Placed" | "Packed" | "Shipped" | "Out for delivery" | "Delivered" ;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' ;
  expectedCompletionDate: Date;
  actualCompletionDate: Date;
}

export const stepIconMap = new Map<string, ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> ([
  ["Placed", ShoppingBag],
  ["Packed", Box],
  ["Shipped", Truck],
  ["Out for delivery", MapPin],
  ["Delivered", House],
  ["Completed", Check],
  ["Cancelled", X]
]);

const sampleOrderStatusSteps: OrderStatusStepDetails[] = [
  {
    stepLabel: "Placed",
    status: 'COMPLETED',
    expectedCompletionDate: new Date(),
    actualCompletionDate: new Date()
  },
  {
    stepLabel: "Packed",
    status: 'COMPLETED',
    expectedCompletionDate: new Date(),
    actualCompletionDate: new Date()
  },
  {
    stepLabel: "Shipped",
    status: 'IN_PROGRESS',
    expectedCompletionDate: new Date(),
    actualCompletionDate: new Date()
  },
  {
    stepLabel: "Out for delivery",
    status: 'NOT_STARTED',
    expectedCompletionDate: new Date(),
    actualCompletionDate: new Date()
  },
  {
    stepLabel: "Delivered",
    status: 'NOT_STARTED',
    expectedCompletionDate: new Date(),
    actualCompletionDate: new Date()
  }
]  

export const OrderDetails = () => {
  const { id } = useParams();

  const orderDetails: Order | undefined = useOrderStore((state) => state.getOrderById)(id);


  const getStepIcon = (step: OrderStatusStepDetails) :  ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> => {
    if (step.status === "COMPLETED") {
      return Check;
    }
    if (step.status === "CANCELLED") {
      return X;
    }
    return stepIconMap.get(step.stepLabel) ?? MapPin;
  }

  return (
    <div className="m-10">
      <div className="flex justify-between">
        <div className="text-gray-600">Order {id}</div>
        
        <div className=" border-gray-100 bg-green-200 text-green-800 rounded-md font-semibold px-2 py-1">on the way</div>
      </div>
      <div className="text-4xl font-bold">Arriving Thursday</div>

      <div className="flex gap-10">
        {sampleOrderStatusSteps.map(step => <OrderStatusStep 
          key={step.stepLabel} 
          icon={getStepIcon(step)} 
          label={"Placed"} 
          isDisabled={step.status === "NOT_STARTED"}
          /> 
        )}
      </div>

      <OrderStatusStep icon={Check} label={"Complete Sample"} isDisabled/>

      <OrderStatusStep icon={X} label={"Cancelled Sample"} isDisabled={false}/>
      <div>
        {orderDetails?.items.map(item => <div>{item.name}</div>)}
      </div>
    </div>
  );
};
