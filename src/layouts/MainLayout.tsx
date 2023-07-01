import { Outlet } from "react-router-dom";


import { Header } from "./header/Header";

export function MainLayout() {
  return (
    <div >
      <Header/>
      <h1>main Layout</h1>
      <Outlet />
    </div>
  );
}
