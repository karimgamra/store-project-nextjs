import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import UserIcon from "./UserIcon";
import SingOutLink from "./SingOutLink";
import { links } from "@/utils/links";
import { auth } from "@clerk/nextjs/server";
const LinksDropDown = () => {
  const { userId } = auth();
  const isAdmin = userId == process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          {links.map((item) => {
            if (item.label === "dashboard" && !isAdmin) return null;
            return (
              <>
                <DropdownMenuItem key={item.href}>
                  <Link href={item.href} className="capitalize w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              </>
            );
          })}

          <DropdownMenuSeparator />
          <DropdownMenu>
            <SingOutLink />
          </DropdownMenu>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
