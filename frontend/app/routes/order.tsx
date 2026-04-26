import { OrderDetails } from "~/components/OrderHistory/OrderDetails";

export async function loader() {
  // you can fetch data here later
  return null;
}

export function meta() {
  return [
    { title: "Blue Whale Corp" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Order() {
  return (
    <>
      <OrderDetails />
    </>
  );
}
