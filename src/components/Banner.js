import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanity_client/client";
const Banner = () => {
  const [banners, setBanners] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "banners"]{
        _id, 
        productName,
        buttonText,
        productDesc, 
        productDiscount,
        saleTime,
        image{
          asset->{
            _id,
            url,
          },
        },

      }`
      )
      .then((data) => setBanners(data))
      .then(console.error);
  }, []);
  return (
    <div>

    </div>
  );
};

export default Banner;
