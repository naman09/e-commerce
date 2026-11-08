export const ORDER_STATUSES = [
  "Placed", 
  "Packed", 
  "Shipped", 
  "Out for delivery", 
  "Delivered", 
  "Cancelled"
] as const;

export type OrderStatus = typeof ORDER_STATUSES[number];

export type OrderProcessStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' ;