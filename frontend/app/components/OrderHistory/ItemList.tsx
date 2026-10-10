import type { Item } from "./OrderHistoryPage"
import { SingleItem } from "./SingleItem";

export interface ItemListProps {
    items: Item[];
}

export const ItemList = (props: ItemListProps) => {

    const getTotalItem = (): Item => {
        return {
            id: 'custom',
            name: 'total',
            buyingPrice: {
                amount: 100,
                currencyCode: 'USD'
            }
        };
    }

    return (
        <div>
            {props.items.map(item => {
                return (
                    <div>
                        <SingleItem item={item}/>
                        <hr className="border-gray-400 my-3"/>
                    </div>
                )
            })}
            <div>
                <SingleItem item={getTotalItem()} />
            </div>
        </div>
    );
}