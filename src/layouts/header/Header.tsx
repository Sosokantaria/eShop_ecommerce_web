import { useContext} from "react"
import { Link } from "react-router-dom";

import { CgPhone } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { ProfileInfo } from "./profileInfoSection";
import { NavForRouteViews } from "../../components/navForRoureViews";
import Logo from "./Logo/FqEhzfAVau7FtJvshFOPaUi72JCBk8mhIWUmOwwB.png";
import { CartContext } from "../../contexts/cartContext";


export function Header() {
  const {setModal}=useContext(CartContext)
  return (
    <header className=" bg-[#1f2605] ">
      <div className="w-full pt-1  ">
        <div className="w-[90%] m-auto">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-x-2  text-[red]  text-sm">
              <CgPhone />
              <span>hotline text</span>
            </span>
          </div>
        </div>
      </div>
      <hr className=" mt-1 border-gray-200 sm:mx-auto  " />
      <div className="w-[90%] m-auto ">
        <nav>
          <div className="flex  justify-between w-full items-center  mx-auto max-w-screen-xl">
            <div className="h-20 flex-wrap overflow-hidden px-6  lg:px-6">
              <Link to="/">
                <img
                  src={Logo}
                  className="w-20  scale-150  bg-[#fcc861] rounded-full"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center md:space-x-6 sm:space-x-5 lg:space-x-5 min-[300px]:space-x-0 lg:order-2">
              <div className="items-center rounded-lg p-2  ">
                <BiSearchAlt className="text-gray-300 hover:text-[#faad14]" size={30} />
              </div>
              <ProfileInfo />
              <div className=" p-2  rounded-lg" onClick={()=>setModal(true)}>
                <BsCart4 className="text-gray-300 hover:text-[#faad14]" size={30} />
              </div>
            </div>
            <div
              data-collapse-toggle="mobile-menu-2"
              className="inline-flex flex-col top-40 gap-2  right-1 absolute bg-[#1f2605]  items-center justify-center  text-sm text-[white] rounded-lg lg:hidden  dark:text-[white] "
            >
              <div className="grid grid-rows-3 gap-5 m-2.5  items-center justify-center font-medium">
                <NavForRouteViews />
              </div>
            </div>
            <div className="hidden items-center lg:flex  ">
              <div className="grid grid-cols-3  lg:gap-x-16 md:gap-x-10  font-medium ">
                <NavForRouteViews />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
