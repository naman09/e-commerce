import { useState } from "react";

export const QuantitySelector = () => {

    const qtySelected = 2;

    const [qty, setQty] = useState<number>(qtySelected);

    const updateQty = (increment: number) => {
        let newQty = qty + increment;

        if (newQty < 0) newQty = 0;

        setQty(newQty);
    }

    return <div className="flex items-center gap-5 my-2">
        <div>Qty</div>
        <button 
            className={`border p-1 px-4 rounded-lg border-neutral-300 shadow-sm cursor-pointer ${qty === 0 ? "bg-gray-300" : "bg-gray-100 hover:bg-white"}`}
            onClick={() => updateQty(-1)}>
                -
        </button>
        <div>{qty}</div>
        <button 
            className="border p-1 px-4 rounded-lg border-neutral-300 shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-100"
            onClick={() => updateQty(1)}>
                +
        </button>
    </div>
}