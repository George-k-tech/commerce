import React, { useEffect, useState } from "react";
import {client, urlFor} from "../sanity_client/client";


const Shop = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client.fetch(
      `*[_type == "products"]{
        _id,
        productName,
        productPrice,
        productDesc,
        productImage{
          asset->{
            _id,
            url
          },
        },
      }`
    )
    .then((data)=> setProducts(data))
    .then(console.error);
  }, []);
  return (
    <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
      <div className="flex lg:flex-row flex-col my-10 justify-center">
        <div className="flex items-center lg:mt-0 mt-5 gap-3 lg:flex-row flex-col">
          <input
          type="text"
          className="w-full lg:w-80 p-2 border-2 border-gray-500 rounded focus:outline-none"
          />
          <button 
          style={{backgroundColor: "#FE043C"}}
          className="rounded w-full lg:w-auto px-10 py-3 text-white"
          >
              Search
          </button>
        </div>
      </div>

    <hr className="my-10"/>
    <div  className="my-5">
      <h3 className="text-3xl font-bold text-center my-10 lg:my-5">
        Products
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          { products &&

          products.map((product) =>(
            <div className="bg-gray-100 rounded shadow-xl p-5 std-border"
            key={product.productName}
            >
              <div className="flex flex-col items-center">
                <img
                src={urlFor(product.productImage).width(200).url()}
                alt={product.title}
                className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
                />
                <h4 className="text-2xl pt-3 font-bold capitalize">
                  {product.productName}
                </h4>
              </div>
              <p className="mt-5">
                {product.productDesc}
              </p>
            </div>
          ))

          }
      </div>
    </div>

    </section>
  );
};

export { Shop };
