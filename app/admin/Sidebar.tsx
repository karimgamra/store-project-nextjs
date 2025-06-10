"use client";
import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((item) => {
        const isActivePage = item.href == pathname;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <Button
            key={item.label}
            asChild
            className="w-full capitalize font-normal justify-start"
            variant={variant}
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
