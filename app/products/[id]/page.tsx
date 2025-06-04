import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";

import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRaTing";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import React from "react";
import { Product } from "@prisma/client";
const singleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price, id } = product;

  return (
    <article className="mt-6">
      <div className="mb-4">
        <BreadCrumbs name={name} />
      </div>
      <section className="mt-6 grid grid-cols-2  gap-5">
        <div className="relative w-full h-64 sm:h-80 md:h96">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width : 768px) 100vw , (max-width : 1200px) 50vw , 33vw"
          />
        </div>
        <div className="ml-7">
          <div className="max-w-72 flex justify-between items-center">
            <h2 className="text-xl font-bold">{name}</h2>
            <FavoriteToggleButton products="" />
          </div>
          <ProductRating productId={id} />
          <div className="mt-4">
            <p className="text-xl">{company}</p>
            <h5 className="bg-gray-300 p-1 w-12 rounded-sm text-black">
              ${price}
            </h5>

            <p className="mt-6 leading-8 text-muted-foreground">
              {description}
            </p>
          </div>
          <AddToCart />
        </div>
      </section>
    </article>
  );
};

export default singleProductPage;
