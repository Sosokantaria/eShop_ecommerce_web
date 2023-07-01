import { Link } from "react-router-dom";

import { IoIosHome } from "react-icons/io";
import { BsInfoLg, BsShop } from "react-icons/bs";

export function NavForRouteViews() {
  return (
    <>
      <Link
        to="/"
        className=" flex flex-col items-center gap-y-2 px-1 py-1 text-[white]  hover:bg-[gray]  font-medium rounded-lg text-sm   "
      >
        <IoIosHome className="text-[white] scale-150  " />
        <span>home</span>
      </Link>
      <Link
        to="Products"
        className="flex flex-col items-center gap-y-2 px-1 py-1 text-[white]  hover:bg-[gray]  font-medium rounded-lg text-sm   "
      >
        <BsShop className="text-white scale-150  " />
        <span>shop</span>
      </Link>
      <Link
        to="/Contact-us"
        className="flex flex-col items-center gap-y-2 py-1 text-[white]  hover:bg-[gray]  font-medium rounded-lg text-sm    "
      >
        <BsInfoLg className="text-white rounded-full scale-150  " />
        <span>contact us</span>
      </Link>
    </>
  );
}