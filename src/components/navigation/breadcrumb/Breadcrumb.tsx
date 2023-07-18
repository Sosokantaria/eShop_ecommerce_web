import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AiOutlineArrowRight } from "react-icons/ai";

export function Breadcrumb() {
  const params = useParams();
  const {t}=useTranslation()
  return (
    <div className="flex gap-2 items-center">
      <Link className="text-white font-bold text-xl" to="/">
        {t("btn.home")}
      </Link>
      {params.shop && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <span className="text-white font-bold text-xl">{t("btn.shop")}</span>
        </div>
      )}
      {params.category && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <Link to="/products/shop" className="text-white font-bold text-xl">
          {t("btn.shop")}
          </Link>
        </div>
      )}
      {params.title && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <span className="text-white font-bold text-xl">{params.title}</span>
        </div>
      )}
      {params.ContactUs && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <span className="text-white font-bold text-xl">
          {t("btn.contuct_us")}
          </span>
        </div>
      )}
      {params.value && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <span className="text-white font-bold text-xl">{params.value}</span>
        </div>
      )}
      {params.login && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <span className="text-white font-bold text-xl">{t("btn.login")}</span>
        </div>
      )}
      {params.register && (
        <div className="flex gap-2 items-center">
          <AiOutlineArrowRight />
          <span className="text-white font-bold text-xl">
          {t("btn.register")}
          </span>
        </div>
      )}
    </div>
  );
}
