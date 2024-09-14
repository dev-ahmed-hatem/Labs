import React from "react";
import { products } from "../constants/ProductData";
import Product from "./Product";

const Products = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-10">Current Products: </h1>
            <div className="product-list flex flex-wrap gap-5">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
