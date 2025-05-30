import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Sammy Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
