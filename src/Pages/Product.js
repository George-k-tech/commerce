import React from "react";
import { urlFor } from "../sanity_client/client";
import { Link } from "react-router-dom";


const Product = (props) => {
  const {productName, productPrice, productDesc, productImage,slug } = props.data;
  return (
    <div
      className="bg-gray-100 rounded shadow-xl p-5 std-border hover:bg-slate-400"
    >
      <Link to={`/product/${slug.current}`}>
      <div className="flex flex-col items-center">
        <img
          src={urlFor(productImage).width(200).url()}
          alt={productName}
          className="rounded-lg object-cover w-40 h-40 border-4 shadow-inner std-border"
        />
        <h4 className="text-2xl pt-3 font-bold capitalize">{productName}</h4>
      </div>
      <p className="mt-5">{productDesc}</p>
      <p className="mt-2 text-center">Ksh:{productPrice}</p>
      <div className="flex justify-center mt-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Add to cart</button>
      </div>
      </Link>
    </div>
  );
};

export default Product;
