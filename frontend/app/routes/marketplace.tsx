import { ProductListingGrid } from "~/components/HomePage/Marketplace/ProductListingGrid";
import { TopNavBar } from "~/components/TopNavBar";

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


export default function Marketplace() {
    return (
        <>
            <TopNavBar/>
            <div className="m-10">
                <h1>Marketplace</h1>
                <ProductListingGrid />
            </div>
        </>
    );
}