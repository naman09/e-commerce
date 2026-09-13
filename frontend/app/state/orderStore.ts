import { create } from "zustand";
import type { Pricing } from "~/components/Marketplace/ProductDetails/ProductDetails";
import type { Order } from "~/components/OrderHistory/OrderHistoryPage";

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

type OrderStore = {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  getOrderById: (orderId?: string) => Order | undefined;
};

export const useOrderStore = create<OrderStore>((set, get) => ({
    orders: mockOrders,
    setOrders: (orders) => set({orders}),
    getOrderById: (orderId?: string) =>
        get().orders.find((order) => order.id === orderId)
}));