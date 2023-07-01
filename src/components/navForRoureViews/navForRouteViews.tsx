import { Link } from "react-router-dom";

import { IoIosHome } from "react-icons/io";
import { BsInfoLg, BsShop } from "react-icons/bs";

export function NavForRouteViews() {
  return (
    <>
      <Link
        to="/"
        className=" flex flex-col items-center gap-y-2 px-1 py-1 text-gray-500 hover:text-[#faad14] font-medium rounded-lg text-sm   "
      >
        <IoIosHome className="text-[#fcc861] scale-150  " />
        <span>home</span>
      </Link>
      <Link
        to="Products"
        className="flex flex-col items-center gap-y-2 px-1 py-1 text-gray-500 hover:text-[#faad14]  font-medium rounded-lg text-sm   "
      >
        <BsShop className="text-[#fcc861] scale-150  " />
        <span>shop</span>
      </Link>
      <Link
        to="/Contact-us"
        className="flex flex-col items-center gap-y-2 py-1 text-gray-500 hover:text-[#faad14] font-medium rounded-lg text-sm    "
      >
        <BsInfoLg className="text-[#fcc861] scale-150  " />
        <span>contact us</span>
      </Link>
    </>
  );
}