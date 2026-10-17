import { Price } from "../commons/Price";
import type { Item } from "./OrderHistoryPage"
import { SingleItem } from "./SingleItem";

export interface ItemListProps {
    items: Item[];
}

export const ItemList = (props: ItemListProps) => {

    const getTotalAmount = () : number => {
        // Assuming all items are in same currency
        return props.items.reduce((acc, item) => acc + item.buyingPrice.amount, 0);
    }

    return (
        <div>
            {props.items.map(item => {
                return (
                    <div key={item.id}>
                        <SingleItem item={item}/>
                        <hr className="border-gray-400 my-3"/>
                    </div>
                )
            })}
            <div className="flex justify-between">
                <div className="font-medium">Total</div>
                <Price amount={getTotalAmount()} currencyCode="USD" />
            </div>
        </div>
    );
}