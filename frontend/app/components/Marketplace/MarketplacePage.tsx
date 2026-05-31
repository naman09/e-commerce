import { TopNavBar } from "../TopNavBar";
import { ProductListingGrid } from "./ProductListingGrid";

export default function MarketplacePage() {
  return (
    <>
      <TopNavBar />
      <div className="m-10">
        <h1 className="text-3xl font-bold my-10">Marketplace</h1>
        <ProductListingGrid />
      </div>
    </>
  );
}
