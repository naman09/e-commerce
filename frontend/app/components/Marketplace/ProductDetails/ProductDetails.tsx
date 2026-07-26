import { useParams } from "react-router";
import { TopNavBar } from "../SearchBar/TopNavBar";
import { ImageCard } from "./ImageCard";
import { Rating } from "./Rating";
import { Price } from "./Price";
import { Variants } from "./Variants";
import { QuantitySelector } from "./QuantitySelector";
import { Button } from "~/components/Commons/Button";
import { FileText, LayoutList } from "lucide-react";

export interface Product {
  id: string;
  rating: number;
  reviews: string[];
  companyId: string;
  name: string;
  pricing: Pricing;
}

export interface Company {
  id: string;
  name: string;
  url: string; // filter by company name
}

export interface Pricing {
  amount: number;
  discountedFromPrice?: number;
  currencyCode: string;
}

export const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <TopNavBar />
      <h1>Product details with id: {id}</h1>
      <div className="ml-10">
        <div className="flex flex-wrap gap-5">
          <ImageCard />
          <div>
            <h2 className="text-gray-500">Company name</h2>
            <h3 className="text-2xl font-bold">Product name</h3>
            <div className="flex gap-2">
              <Rating rating={4.2} />

              {/* TODO: replace with a clickable component which redirects to review section */}
              <p className="text-xs underline">128 reviews</p>
            </div>
            <Price currencyCode="INR" amount={89.99} />
            <Variants />
            <QuantitySelector />
            <div className="flex flex-col gap-2">
              <Button label="Add to cart" />
              <Button label="Buy now" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex"><FileText /> Description</div>
          <p>Engineered for performance and comfort, the CloudStride Pro delivers responsive cushioning across every stride. Built with a breathable mesh upper and dual-density foam midsole.
          </p>
        </div>

        <div>
        <div className="flex"><LayoutList /> Details </div>
          <table className="border">
            <tbody>
              <tr className="border">
                <td>Weight</td>
                <td>280g (size 9)</td>
                <td>8mm</td>
              </tr>
              <tr>
                <td>Upper</td>
                <td>280g (size 9)</td>
                <td>8mm</td>
              </tr>
              <tr>
                <td>Outsole</td>
                <td>Carbon rubber SKU</td>
                <td>AS-CSP-OBL-09</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>description Specs and reviews</div>
      </div>
    </>
  );
};
