import React from "react";
import QuantityCounter from "./Quantity";

const Product = ({ img, name, price, description }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="">
                <img className="rounded-t-lg w-full" src={img} alt="" />
            </a>
            <div className="p-5 flex flex-col justify-between h-[320px]">
                <a href="">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <span className="inline-block font-bold text-white text-xl my-4">
                        {price} $
                    </span>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <QuantityCounter />
            </div>
        </div>
    );
};

export default Product;
