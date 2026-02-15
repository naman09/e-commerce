import type { LoaderFunctionArgs } from "react-router";
import { ProductListingGrid } from "~/components/HomePage/Marketplace/ProductListingGrid";
import type { Route } from "../+types/root";

export async function loader({ request }: LoaderFunctionArgs) {
    // you can fetch data here later
    return null;
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Blue Whale Corp" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Marketplace() {
    return (
        <div className="m-10">
            <h1>Marketplace</h1>
            <ProductListingGrid />
        </div>
    );
}