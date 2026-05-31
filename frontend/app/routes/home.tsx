import { HomePage } from "~/components/HomePage/HomePage";

export function meta() {
  return [
    { title: "Blue Whale Corp" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
