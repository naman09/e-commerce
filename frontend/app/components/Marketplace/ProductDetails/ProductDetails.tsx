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

const percPerRating = {
  5: 62,
  4: 20,
  3: 10,
  2: 5,
  1: 3
}

export const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-grey-20">
      <TopNavBar />
      <div className="mx-10">
        <div className="flex flex-wrap gap-5">
          <ImageCard />
          <div>
            <h2 className="text-gray-500">Company name</h2>
            <h3 className="text-2xl font-bold">Product name</h3>
            <div className="flex gap-2">
              <Rating rating={4.2} variant={"SMALL"}/>

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

        <div className="my-5">
          <div className="flex gap-2 items-center text-2xl font-semibold"><FileText className="h-5 w-5"/> Description</div>
          <hr className="border-gray-200 my-3"/>
          <p>Engineered for performance and comfort, the CloudStride Pro delivers responsive cushioning across every stride. Built with a breathable mesh upper and dual-density foam midsole.
          </p>
        </div>

        <div className="my-5">
          <div className="flex gap-2 items-center text-2xl font-semibold"><LayoutList className="h-5 w-5"/> Details and Specs</div>
          <hr className="border-gray-200 my-3"/>
          <ul className="list-disc">
            <li>Weight</li>
            <li>280g (size 9)</li>
            <li>Outsole</li>
            <li>Carbon rubber SKU</li>
          </ul>
        </div>

        <div className="my-5">
          <div className="flex gap-2 items-center text-2xl font-semibold"><Star className="h-5 w-5" /> Reviews</div>
          <hr className="border-gray-200 my-3"/>
          <div className="flex gap-2">
            <div className="w-1/5"><Rating rating={4.2} variant={"BIG"}/></div>
            <div className="w-4/5">
              {Object.entries(percPerRating)
                .sort()
                .reverse()
                .map(([ratingLevel, percent]) => 
                  <ProgressBar key={ratingLevel} label={ratingLevel} progress={percent} classNames="bg-yellow-400"/> 
                )
              }
            </div>
          </div>
        </div>

        <ReviewList />

      </div>
    </div>
  );
};
