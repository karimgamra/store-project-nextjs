import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

const FavoriteToggleButton = ({ products }: { products: string }) => {
  return (
    <Button size={"icon"} variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart className="text-xl" />
    </Button>
  );
};

export default FavoriteToggleButton;
