import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import Image from "next/image";
const Hero = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
  return (
    <Carousel className="">
      <CarouselContent>
        {Hero.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="">
                  <CardContent className="p-2">
                    <Image
                      src={item}
                      className="w-full h-[24rem] rounded-md object-cover"
                      alt={"hero"}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
