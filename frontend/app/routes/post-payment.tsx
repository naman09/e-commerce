import { PostPaymentPage } from "~/components/PostPayment/PostPaymentPage";

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

export default function PostPayment() {
  return (
    <>
      <PostPaymentPage />
    </>
  );
}
