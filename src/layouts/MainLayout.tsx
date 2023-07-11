import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";
import { CartModal } from "./cartModal";
import { Footer } from "./footer";
import { Search } from "./header/searchModal";

export function MainLayout() {
  return (
    <div className="h-[100vh] overflow-y-scroll scrollbar-hide ">
      <Header />
      <CartModal />
        <Search />
      <div className="w-[90%] m-auto h-[120vh] overflow-y-scroll  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
