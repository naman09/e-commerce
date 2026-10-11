import { Dot, Image } from "lucide-react";
import { Price } from "../commons/Price";
import type { Item } from "./OrderHistoryPage";

export interface SingleItemProps {
    item: Item;
}

export const SingleItem = (props: SingleItemProps) => {
    const { item } = props;
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <img className="w-10" src={item.imageUrl} />
                <div>
                    {/* TODO: Show full text on hover */}
                    <div className="w-100 truncate font-medium">{item.name}</div>
                    <div className="flex text-gray-600 text-sm">Size M<Dot/>Qty 1</div>
                    
                </div>
            </div>
            <Price amount={item.buyingPrice.amount} currencyCode={item.buyingPrice.currencyCode} />
        </div>
    );
}