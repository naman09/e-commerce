import { useState } from "react";
import { Price } from "./Price"
import type { Pricing } from "./ProductDetails";

const variants: ProductVariant[] = [
    {
        "id": "3",
        "name": "acv",
        "price": {
            "amount": 39.00,
            "currencyCode": "INR"
        }
    },
    {
        "id": "4",
        "name": "adwadwad",
        "price": {
            "amount": 45.00,
            "currencyCode": "INR"
        }
    },
    {
        "id": "5",
        "name": "dwad dwadawd",
        "price": {
            "amount": 99.00,
            "currencyCode": "INR"
        }
    }
]

export interface ProductVariant {
    id: string;
    name: string;
    price: Pricing;
}

export const Variants = () => {
    // Product id will be set here which will change all the product details

    const [productId, setProductId] = useState<string>("3"); // TODO: replace with global state of product id using recoil

    const handleClick = (variant: ProductVariant) => {
        setProductId(variant.id);
    }

    return <div className="flex gap-2">
        {variants.map(variant =>
            <div 
                key = {variant.id}
                onClick={() => handleClick(variant)}
                className={`border w-30 rounded-lg text-center border-gray-300 cursor-pointer p-2 ${variant.id === productId ? "bg-amber-200" : "bg-white"}`}
            >
                <div className="truncate">{variant.name}</div>
                <Price amount={variant.price.amount} currencyCode={variant.price.currencyCode} />
            </div>
        )}
    </div>
}