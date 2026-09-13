import Order from "~/routes/order";
import type { Pricing } from "../Marketplace/ProductDetails/ProductDetails";
import { OrderListCard } from "./OrderListCard";
import { useEffect } from "react";
import { useOrderStore } from "~/state/orderStore";

// We also have intreface - Product. We may use common interface. 
// But this gives more flexibilty
export interface Item {
  id: string;
  name: string;
  buyingPrice: Pricing;
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

  useEffect(() => {
    setOrders(mockOrders);
  }, [])

  return <div className="mx-10 my-5">
    {orders.map(order => <OrderListCard key={order.id} orderId={order.id} />)}
  </div>
};
