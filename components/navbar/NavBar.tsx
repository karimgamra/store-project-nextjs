import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropDown from "./LinksDropDown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
const NavBar = () => {
  // flex flex-col sm:flex-row sm:justify-between sm:items-center py-8
  return (
    <nav className="border-b">
      <Container className="flex  flex-col sm:flex-row sm:justify-between sm:items-center py-8 gap-5 flex-wrap">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center ml-4">
          <CartButton />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
