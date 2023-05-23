import React from "react";

function Banner() {
    const externalImage = 'https://media.wired.com/photos/63b8d0a771c6b526845f15a6/master/w_1600%2Cc_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg'
  return (
    <section>
    <div
      class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
      style={{backgroundImage: `url(${externalImage})`}}
    >
      <div class="md:w-1/2">
        <p class="font-bold text-sm uppercase">Services</p>
        <p class="text-3xl font-bold">Multimedia products</p>
        <p class="text-2xl mb-10 leading-none">
          Atractive designs for your brand
        </p>
        <a
          href="#"
          class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
        >
          Shop Now
        </a>
      </div>
    </div>
    <div className="">
        <h3>Best Selling Products</h3>
    </div>
    </section>
  );
}

export default Banner;
