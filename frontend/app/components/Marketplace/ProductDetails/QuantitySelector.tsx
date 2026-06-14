import Tippy from "@tippyjs/react";
import { useState } from "react";

export const QuantitySelector = () => {

    const qtySelected:number = 2000;

    const [qty, setQty] = useState<number>(qtySelected);

    const updateQty = (increment: number) => {
        let newQty = qty + increment;

        if (newQty < 0) newQty = 0;

        setQty(newQty);
    }

    return <div className="flex items-center gap-8 my-2">
        <div>Qty</div>
        <button 
            className={`border p-1 px-4 rounded-lg border-neutral-300 shadow-sm cursor-pointer ${qty === 0 ? "bg-gray-300" : "bg-gray-100 hover:bg-white"}`}
            onClick={() => updateQty(-1)}>
                -
        </button>
        {/* <Tippy content={qty} placement="bottom-start" className="bg-black text-white px-2" arrow={true}> */}
            <div className="w-8 truncate">{`${qty}`}</div>
        {/* </Tippy> */}
        <button 
            className="border p-1 px-4 rounded-lg border-neutral-300 shadow-sm cursor-pointer bg-gray-100 hover:bg-white"
            onClick={() => updateQty(1)}>
                +
        </button>
    </div>
}