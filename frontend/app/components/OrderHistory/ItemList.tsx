import { Price } from "../commons/Price";
import type { Item } from "./OrderHistoryPage"
import { SingleItem } from "./SingleItem";

export interface ItemListProps {
    items: Item[];
}

export const ItemList = (props: ItemListProps) => {

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
                <Price amount={1234} currencyCode="USD" />
            </div>
        </div>
    );
}