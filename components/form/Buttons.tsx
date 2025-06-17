"use client";

import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({
  size = "lg",
  className = "",
  text = "submit",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={size}
      className={cn("capitalize", className)}
      disabled={pending}
    >
      {pending ? (
        <>
          {" "}
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> ...please wait
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
