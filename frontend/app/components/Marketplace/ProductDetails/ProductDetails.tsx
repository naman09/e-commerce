import { useParams } from "react-router";
import { TopNavBar } from "../SearchBar/TopNavBar";
import { ImageCard } from "./ImageCard";
import { Rating } from "./Rating";

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
  price: number;
  discountedFromPrice: number;
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
              <p className="text-xs underline">128 reviews</p>
            </div>
            <em>Price: XX</em>
            <p>options</p>
            <button>select qty</button>
            <button>Add to cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div>Detailed description and ratings breakdown</div>
      </div>
    </>
  );
};
