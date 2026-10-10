import type { Item } from "./OrderHistoryPage";

export interface SingleItemProps {
    item: Item;
}

export const SingleItem = (props: SingleItemProps) => {
    return (
        <div>
            {props.item.name}
        </div>
    );
}