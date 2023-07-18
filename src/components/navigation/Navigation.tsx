import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useOnclickOutside from "react-cool-onclickoutside";
import { Breadcrumb } from "./breadcrumb";

export function Navigation() {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOnclickOutside(() => {
    setOpen(false);
  });
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] flex  bg-[#1f2605] m-10 mb-0 p-5 rounded-3xl text-white">
        <div
          ref={ref}
          className="w-[40%] flex flex-col justify-start items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="inline-flex w-[50%] justify-between items-center">
            <GiHamburgerMenu size={30} />
            <span className="font-bold text-3xl ">navigation</span>
          </div>
          {open && (
            <div className="absolute  w-[30%]  z-10 bg-[gray] text-black">
              sdaas
            </div>
          )}
        </div>
        <Breadcrumb/>
      </div>
    </div>
  );
}
