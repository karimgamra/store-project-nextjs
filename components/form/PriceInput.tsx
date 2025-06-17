import React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const name = "price";
type FormInputProps = {
  defaultValue?: string;
};

const PriceInput = ({ defaultValue }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price $
      </Label>
      <Input
        name={name}
        type="number"
        defaultValue={defaultValue || 100}
        required
        min={0}
      />
    </div>
  );
};

export default PriceInput;
