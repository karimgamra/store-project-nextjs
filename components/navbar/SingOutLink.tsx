"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
const SingOutLink = () => {
  const { toast } = useToast();
  const { user } = useUser();

  const handleLogout = () => {
    toast({ description: "logout successful" });
  };

  return (
    <div>
      <SignOutButton redirectUrl="/">
        <Link
          href={"/"}
          className="w-full text-left p-2"
          onClick={handleLogout}
        >
          logout
        </Link>
      </SignOutButton>
    </div>
  );
};

export default SingOutLink;
