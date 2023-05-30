import React, { useEffect, useState } from "react";
import { client} from "../sanity_client/client";
import Banner from "../components/Banner";
import Product from "./Product";

const Shop = () => {
  const  [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products"]{
        _id,
        slug,
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
      .then((data) => setProducts(data))
      .then(console.error);
  }, []);
  return (
    <section className=" w-full lg:px-0 px-5 lg:w-full mx-auto  border border-red-600">
      <div>
        <Banner />
      </div>
      <hr className="my-6" />
      <div className="my-6">
        <h3 className="text-3xl font-bold text-center my-10 lg:my-5">
          Products
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products &&
            products.map((product) => (
              <Product key={product._id}  data={product}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export { Shop };
