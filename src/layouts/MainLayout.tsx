import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";
import { CartModal } from "./cartModal";
import { Footer } from "./footer";
import { Search } from "./header/searchModal";

export function MainLayout() {
  return (
    <div>
      <Header />
      <CartModal />
      <div className=" bg-[gray] fixed overflow-hidden rounded-lg w-[80%] z-40">
        <Search />
      </div>
      <div className="w-[90%] m-auto min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
