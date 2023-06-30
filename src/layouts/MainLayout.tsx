import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div >
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
}
