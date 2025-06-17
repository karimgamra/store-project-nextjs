import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const name = "image";
const ImageInput = () => {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>image</Label>
      <Input id={name} type="file" name={name} required accept="image/*" />
    </div>
  );
};

export default ImageInput;
