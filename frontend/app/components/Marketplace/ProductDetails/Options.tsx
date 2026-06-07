import { useState } from "react";
import { Price } from "./Price"
import type { Pricing } from "./ProductDetails";

const options: ProductOption[] = [
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

export interface ProductOption {
    id: string;
    name: string;
    price: Pricing;
}

export const Options = () => {
    // Product id will be set here which will change all the product details

    const [productId, setProductId] = useState<string>("3"); // TODO: replace with global state of product id using recoil

    const handleClick = (option: ProductOption) => {
        setProductId(option.id);
    }

    return <div className="flex gap-2">
        {options.map(option =>
            <div 
                key = {option.id}
                onClick={() => handleClick(option)}
                className={`border w-30 rounded-lg text-center border-gray-300 cursor-pointer p-2 ${option.id === productId ? "bg-amber-200" : "bg-white"}`}
            >
                <div className="truncate">{option.name}</div>
                <Price amount={option.price.amount} currencyCode={option.price.currencyCode} />
            </div>
        )}
    </div>
}