import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";
import { CartModal } from "./cartModal";
import { Footer } from "./footer";
import { Search } from "./header/searchModal";

export function MainLayout() {
  return (
    <div >
      <Header />
      <CartModal />
        <Search />
      <div className="w-[90%] m-auto min-h-[120vh]  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
