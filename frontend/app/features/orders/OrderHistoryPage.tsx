import Order from "~/routes/order";
import type { Pricing } from "../../components/Marketplace/ProductDetails/ProductDetails";
import { SingleOrderLine } from "./SingleOrderLine";
import { Fragment, useEffect, useState } from "react";
import { useOrderStore } from "~/state/orderStore";
import { Button } from "../../components/commons/Button";
import { ORDER_STATUSES } from "./orders.types";

// We also have intreface - Product. We may use common interface. 
// But this gives more flexibilty
export interface Item {
  id: string;
  name: string;
  buyingPrice: Pricing;
  imageUrl?: string; 
}

export interface Order {
  id: string;
  items: Item[]; 
}

const pricing1: Pricing = {
  amount: 21,
  currencyCode: 'USD'
}

const mockOrders: Order[] = [
  {
    id: "order-123",
    items: [
      {
        id: "item-12",
        name: "abc",
        buyingPrice: pricing1,
      },
      {
        id: "item-2",
        name: "def",
        buyingPrice: pricing1,
      }
    ]
  },
  {
    id: "order-456",
    items: [
      {
        id: "item-40",
        name: "uvw",
        buyingPrice: pricing1,
      },
      {
        id: "item-50",
        name: "xyz",
        buyingPrice: pricing1,
      }
    ]
  }
];

export const OrderHistoryPage = () => {

  const orders = useOrderStore((state) => state.orders);
  const setOrders = useOrderStore((state) => state.setOrders);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([ORDER_STATUSES[0]]);

  useEffect(() => {
    setOrders(mockOrders);
  }, [])

  const handleDeliveryFilterClick = (btnClicked: string) => {
    return () => {
      if (selectedFilters.includes(btnClicked)) {
        setSelectedFilters(selectedFilters.filter(filter => filter !== btnClicked));
      } else {
        setSelectedFilters([...selectedFilters, btnClicked]);
      } 
    }
  }

  return (
    <div className="p-10 bg-gray-50">
      <div className="text-xl">Your Orders</div>
      <div className="text-sm text-gray-600">6 orders in the last 12 months</div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {["All",...ORDER_STATUSES].map(orderStatus => 
            <Button 
              key={orderStatus} 
              className={selectedFilters.includes(orderStatus) ? "bg-sky-600 hover:bg-sky-600 text-white" : "bg-white border border-gray-200 hover:border-sky-600"} 
              label={orderStatus} 
              onClick = {handleDeliveryFilterClick(orderStatus)}
            />
          )}
        </div>
        <div>
          Search Bar
        </div>
      </div>

      <hr className="border-gray-300 my-3"/>

      <div>
        {orders.map((order) => (
          <Fragment key={order.id}>
            <SingleOrderLine orderId={order.id} />
            <hr className="border-gray-300 my-3"/>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
