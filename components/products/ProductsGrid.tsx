/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import FavoriteToggleButton from "./FavoriteToggleButton";

import { Product } from "@prisma/client";
const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-7">
        {products.map((item) => {
          const { name, price, image, id } = item;
          return (
            <article key={id} className="">
              <Link key={id} href={`products/${id}`}>
                <div className="shadow-lg p-4  relative duration-500 transition-shadow hover:shadow-2xl  ">
                  <div className="overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="h-48 md:h-64 rounded-lg w-full object-cover transform hover:scale-105 duration-500 overflow-hidden transition-transform"
                    />
                  </div>
                  <div className="mt-4 text-center capitalize">
                    <h2 className="text-xl">{name}</h2>
                    <p className="text-muted-foreground  mt-2">${price}</p>
                  </div>

                  <div className="absolute top-10 right-14 bg-white  rounded-sm cursor-pointer">
                    <FavoriteToggleButton products="" />
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default ProductsGrid;
