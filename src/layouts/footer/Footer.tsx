import { NavForRouteViews } from "../../components/navForRoureViews";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { CgPhone } from "react-icons/cg";

export function Footer() {
  return (
    <footer className="bg-[#1f2605] text-[white] shadow  ">
      <div className="w-[90%] m-auto">
        <div className="w-full  max-w-screen-xl mx-auto  items-center ">
          <div className="flex justify-center  mt-10 flex-wrap gap-x-[150px]">
            <div className="flex  flex-col  gap-y-6 sm:flex items-center justify-center  sm:items-center ">
              <div className="flex flex-wrap items-center gap-20 justify-center mt-10 font-medium sm:mb-0 ">
                <NavForRouteViews />
              </div>
              <div className="flex flex-col gap-y-4  text-sm font-bold  sm:mb-0 ">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5949.022199821362!2d44.760763!3d41.795749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446e73fb6cf38b%3A0x88580f539ac2d0e0!2s10%20Demetre%20Tavdadebuli%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1688493879717!5m2!1sen!2sge"
              className="lg:w-[350px] lg:h-[300px] max-s2:w-[250px] max-s2:h=[200px] rounded-lg mt-10"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
