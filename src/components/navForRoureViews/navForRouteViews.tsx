import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IoIosHome } from "react-icons/io";
import { BsInfoLg, BsShop } from "react-icons/bs";

const enum View {
  HOME = "home",
  SHOP = "shop",
  CONTUCTUS = "contactUs",
  ELSE="ELSE"
}

export function NavForRouteViews() {
  const params = useParams();

  const { t } = useTranslation();
  const [active, setActive] = useState<View>(View.HOME);

  useEffect(() => {
    if (params.shop) {
      setActive(View.SHOP);
    } else if (Object.keys(params).length === 0) {
      setActive(View.HOME);
    } else if (params.ContactUs) {
      setActive(View.CONTUCTUS);
    } else {setActive(View.ELSE)}
  }, [params]);

  return (
    <>
      <div>
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
        className="flex flex-col items-center gap-y-2 px-1 py-1 text-gray-500   font-medium rounded-lg text-sm   "
      >
        <BsShop className="text-[#fcc861] scale-150  " />
        <div style={{ color: active === "shop" ? "white" : "gray" }}>
          {t("btn.shop")}
        </div>
      </Link>
      <Link
        to="/Contact-us/ContactUs"
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
