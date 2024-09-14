import React, { useEffect, useState } from "react";

const QuantityCounter = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        console.log("re-renders quantity incrementer component");
    }, [quantity]);

    return (
        <div className="w-[150px] flex justify-evenly items-center gap-x-4 bg-white rounded-full py-2 px-6">
            <button
                className="rounded-full bg-yellow-300 size-8 cursor-pointer text-base flex
                 justify-center items-center font-bold"
                onClick={decrement}
            >
                -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
                className="rounded-full bg-yellow-300 size-8 cursor-pointer text-base flex
                 justify-center items-center font-bold"
                onClick={increment}
            >
                +
            </button>
        </div>
    );
};

export default QuantityCounter;
