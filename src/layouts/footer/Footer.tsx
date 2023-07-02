
import { NavForRouteViews } from "../../components/navForRoureViews";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { CgPhone } from "react-icons/cg";

export function Footer() {
  return (
    <footer className="bg-[#1f2605] text-[white] shadow  ">
      <div className="w-[90%] m-auto">
        <div className="w-full max-w-screen-xl mx-auto  items-center md:py-8">
          <div className="flex  flex-col gap-y-6 sm:flex  sm:items-center ">
            <div className="mt-3 flex ">
            </div>
            <div className="flex flex-wrap items-center gap-x-20 mb-6 font-medium sm:mb-0 ">
              <NavForRouteViews />
            </div>
            <div className="flex flex-wrap gap-x-4 m-4 text-sm font-bold  sm:mb-0 ">
              <div className="flex gap-2 items-center">
                <HiOutlineMail className="scale-150  " />
                <span>eShop@gmail.com</span>
              </div>
              <div className="flex items-center gap-x-2  text-[red]  text-sm">
                <CgPhone className="scale-150  " />
                <span>hotline</span>
              </div>
              <div className="flex gap-2 items-center">
                <HiOutlineLocationMarker className="scale-150  " />
                <span>location</span>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            Copyright © 2023 eShop . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
