import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";
import { CartModal } from "./header/cartModal";
import { Footer } from "./footer";

export function MainLayout() {
  return (
    <div>
      <Header />
      <CartModal />
      <div className="w-[90%] m-auto min-h-[100vh]">
        <h1>main Layout</h1>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
