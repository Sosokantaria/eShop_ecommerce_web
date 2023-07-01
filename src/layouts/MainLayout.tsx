import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";

export function MainLayout() {
  return (
    <div>
      <Header />
      <div className="w-[90%] m-auto min-h-[100vh]">
        <h1>main Layout</h1>
        <Outlet />
      </div>
    </div>
  );
}
