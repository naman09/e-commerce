import { useParams } from "react-router";
import { TopNavBar } from "../SearchBar/TopNavBar";
import { ImageCard } from "./ImageCard";
import { Rating } from "./CustomerReviews/Rating";
import { Price } from "./Price";
import { Variants } from "./Variants";
import { QuantitySelector } from "./QuantitySelector";
import { Button } from "~/components/Commons/Button";
import { FileText, LayoutList, Star } from "lucide-react";
import ProgressBar from "~/components/Commons/ProgressBar";
import { ReviewList } from "./CustomerReviews/ReviewList";

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
      <div className="mx-10">
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
          <div className="flex gap-2 items-center"><FileText className="h-4 w-4"/> Description</div>
          <p>Engineered for performance and comfort, the CloudStride Pro delivers responsive cushioning across every stride. Built with a breathable mesh upper and dual-density foam midsole.
          </p>
        </div>

        <div>
        <div className="flex gap-2 items-center"><LayoutList className="h-4 w-4"/> Details and Specs</div>
            <ul className="list-disc">
              <li>Weight</li>
              <li>280g (size 9)</li>
              <li>Outsole</li>
              <li>Carbon rubber SKU</li>
            </ul>
        </div>

        <div>
          <div className="flex gap-2 items-center"><Star className="h-4 w-4" /> Reviews</div>
          <div className="grid grid-flow-col grid-rows-5 gap-4">
            <div className="row-span-5"><Rating rating={4.2} /> </div>
            <div className="col-span-2"><ProgressBar progress={30} classNames="bg-yellow-400"/></div>
            <div className="col-span-2"><ProgressBar progress={20} classNames="bg-yellow-400"/></div>
            <div className="col-span-2"><ProgressBar progress={20} classNames="bg-yellow-400"/></div>
            <div className="col-span-2"><ProgressBar progress={40} classNames="bg-yellow-400"/></div>
            <div className="col-span-2"><ProgressBar progress={27} classNames="bg-yellow-400"/></div>
          </div>
        </div>

        <ReviewList />

      </div>
    </>
  );
};
