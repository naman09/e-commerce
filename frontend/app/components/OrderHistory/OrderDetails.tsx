import { useParams } from "react-router";
import type { Order } from "./OrderHistoryPage";
import { useOrderStore } from "~/state/orderStore";
import { Box, Check, House, MapPin, ShoppingBag, Truck, Wallet, X, type LucideProps } from "lucide-react";
import { OrderStatusStep } from "../commons/OrderStatusStep";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { Button } from "../commons/Button";
import { ItemList } from "./ItemList";


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
    status: 'IN_PROGRESS',
    expectedCompletionDate: new Date(),
    actualCompletionDate: new Date()
  },
  {
    stepLabel: "Shipped",
    status: 'NOT_STARTED',
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
    <div className="p-10 bg-gray-50">

      <div className="flex justify-between">
        <div className="text-gray-600">Order {id}</div>
        <div className="bg-green-200 text-green-800 rounded-md font-semibold px-2 py-1">on the way</div>
      </div>
      
      <div className="text-4xl font-bold">Arriving Thursday</div>
       
      <div className="my-5 border border-gray-300 rounded-xl bg-white px-10 pb-5 pt-10">

        <div className="flex gap-10">
          {sampleOrderStatusSteps.map((step, idx) => {

            // TODO: refactor

              let showLines = true;

              let stepDisabled = false;

              let nextLineStatus: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" = "NOT_STARTED";

              if (idx === 0) {
                showLines = false;
              }

              if (step.status === "IN_PROGRESS") {
                nextLineStatus = "IN_PROGRESS";
              }

              if (step.status === "COMPLETED") {
                nextLineStatus = "COMPLETED";
              }
            
              if (step.status === "NOT_STARTED") {
                nextLineStatus = "NOT_STARTED"
                stepDisabled = true;
              }

              return <>
                {showLines && nextLineStatus === "NOT_STARTED" && <div className="h-0.5 flex-1 bg-gray-400 mt-4"></div>}
                {showLines && nextLineStatus === "COMPLETED" && <div className="h-0.5 flex-1 bg-sky-600 mt-4"></div>}
                {showLines && nextLineStatus === "IN_PROGRESS" && <div className="h-0.5 flex flex-1 mt-4">
                  <div className="flex-1 bg-sky-600"></div>
                  <div className="flex-1 bg-gray-400"></div>
                </div>}

                <OrderStatusStep 
                  key={step.stepLabel} 
                  icon={getStepIcon(step)} 
                  label={step.stepLabel} 
                  isDisabled={stepDisabled}
                />

                {/* <OrderStatusStep icon={X} label={"Cancelled Sample"} isDisabled={false}/> */}
              </>
            }
          )}
        </div>

        <hr className="border-gray-400 mt-10 mb-5"/>

        <div className="flex justify-between">
          <div>Carrier fast go losgitics- Tracking#12340 </div>
          <Button label="Cancel order" />
        </div>

      </div>

      <div className="my-5 border border-gray-300 rounded-xl bg-white px-10 py-5">
        <div className="text-2xl font-bold">Items in this order</div>
        {orderDetails?.items && <ItemList items={orderDetails.items} />}
      </div>

      <div className="my-5 flex gap-2">
        <div className="border border-gray-300 rounded-xl bg-white p-5 flex-1">
          <div className="flex gap-2 text-gray-500 text-sm mb-2"><MapPin /> Delivery Address</div>
          <div className="w-50 font-semibold">
            Pirya Nair
            44 Lakebiew Road, Apt 3B
            Hyderabad, TG 500034
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl bg-white p-5 flex-1">
          <div className="flex gap-2 text-gray-500 text-sm mb-2"><Wallet /> Payment</div>
          <div className="w-50 font-semibold">
            Visa ending 4117
            Billed Sep 8
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button label="Return an item" className="flex-1"/>
        <Button label="Download invoice" className="flex-1"/>
        <Button label="Get help with this order" className="flex-1"/>
      </div>

    </div>
  );
};
