import React, { useEffect, useState } from "react";
import {client, urlFor} from "../sanity_client/client";
import Banner from "../components/Banner";


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
    <section className=" w-full lg:px-0 px-5 lg:w-full mx-auto  border border-red-600">
      <div >
        <Banner />
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
                className="rounded-lg object-cover w-40 h-40 border-4 shadow-inner std-border"
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
