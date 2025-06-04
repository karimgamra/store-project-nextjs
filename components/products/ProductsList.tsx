import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      <article className="mt-8 grid grid-cols-1">
        {products.map((product) => {
          const { image, price, name, id, company } = product;
          return (
            <Link key={id} href={`/products/${id}`}>
              <Card className="shadow-lg flex justify-between p-8 hover:shadow-xl mb-4 transition-shadow duration-500 items-start relative">
                <Image
                  src={image}
                  alt={name}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold capitalize">{name}</h2>
                  <h4 className="text-muted-foreground">{company}</h4>
                </div>
                <p className="text-xl ">${price}</p>
                <div className="absolute bottom-10 right-5">
                  <FavoriteToggleButton products={id} />
                </div>
              </Card>
            </Link>
          );
        })}
      </article>
    </>
  );
};

export default ProductsList;
