import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IoIosHome } from "react-icons/io";
import { BsInfoLg, BsShop } from "react-icons/bs";

const enum View {
  HOME = "home",
  SHOP = "shop",
  CONTUCTUS = "contactUs",
}



export function NavForRouteViews() {
  const { t } = useTranslation();
  const [active, setActive] = useState<View>(View.HOME);
  return (
    <>
      <div  onClick={()=>setActive(View.HOME)}>
        <Link
          to="/"
          className=" flex flex-col items-center gap-y-2 px-1 py-1 text-gray-500  font-medium rounded-lg text-sm   "
        >
          <IoIosHome className="text-[#fcc861] scale-150  " />
          <div style={{ color: active === "home" ? "white" : "gray" }}>
            {t("btn.home")}
          </div>
        </Link>
      </div>
      <Link
        to="Products/shop"
        onClick={() => setActive(View.SHOP)}
        className="flex flex-col items-center gap-y-2 px-1 py-1 text-gray-500   font-medium rounded-lg text-sm   "
      >
        <BsShop className="text-[#fcc861] scale-150  " />
        <div style={{ color: active === "shop" ? "white" : "gray" }}>
          {t("btn.shop")}
        </div>
      </Link>
      <Link
        to="/Contact-us/ContactUs"
        onClick={() => setActive(View.CONTUCTUS)}
        className="flex flex-col items-center gap-y-2 py-1 text-gray-500  font-medium rounded-lg text-sm    "
      >
        <BsInfoLg className="text-[#fcc861] scale-150  " />
        <div style={{ color: active === "contactUs" ? "white" : "gray" }}>
          {t("btn.contuct_us")}
        </div>
      </Link>
    </>
  );
}
