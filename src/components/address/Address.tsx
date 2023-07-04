import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { CgPhone } from "react-icons/cg";

export function Address() {
  return (
    <>
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
    </>
  );
}
