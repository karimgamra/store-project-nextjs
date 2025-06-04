import React from "react";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-12">
      <div className="">
        <h2 className="text-6xl font-bold capitalize max-w-2xl">
          We are changing the way people shop
        </h2>
        <p className="text-muted-foreground mt-4 p-2 -tracking-tighter max-w-2xl text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          provident maiores odio saepe ducimus labore repellat! Ut deleniti
          perspiciatis dolorem, beatae nesciunt, cumque quia neque accusamus
          soluta, deserunt harum maxime.
        </p>
        <Link href={"/products"}>
          <Button size={"lg"} className="text-white mt-7">
            Our Products
          </Button>
        </Link>
      </div>
      <div>
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
