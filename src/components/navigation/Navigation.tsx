import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import { useTranslation } from "react-i18next";

import { GiHamburgerMenu } from "react-icons/gi";

import { Breadcrumb } from "./breadcrumb";
import { TProducts } from "../../types/product";

export function Navigation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [onhoverOpen, setOnhoverOpen] = useState<boolean>(false);
  const [items, setItems] = useState<TProducts[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueTitles, setUniqueTitles] = useState<string[]>([]);

  const ref = useOnclickOutside(() => {
    setOpen(false);
    setOnhoverOpen(false)
  });

  async function GetItems() {
    try {
      const resp = (await axios.get("http://localhost:3001/products?")).data;
      setItems(resp);
      const uniqueCategories = resp
        .map((item: TProducts) => item.category)
        .filter(
          (value: any, index: any, self: any) => self.indexOf(value) === index
        );
      setUniqueCategories(uniqueCategories);
    } catch (error) {}
  }

  useEffect(() => {
    GetItems();
  }, []);

  function handleCategoryHover(category: string) {
    const uniqueTitles = items
      .filter((item) => item.category === category)
      .map((item) => item.title)
      .filter((value, index, self) => self.indexOf(value) === index);
    setUniqueTitles(uniqueTitles);
    setOnhoverOpen(true);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] flex bg-[#1f2605] m-10 mb-0 p-5 rounded-3xl text-white">
        <div className="w-[100%] relative flex justify-between items-center">
          <div
            className="inline-flex w-[40%] justify-between items-center"
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu size={30} />
            <span className="font-bold text-3xl hidden md:block xl:block">
              {t("btn.navigation")}
            </span>
          </div>
          <Breadcrumb />
          <div
            ref={ref}
            className="absolute top-14 w-[100%] rounded-lg z-10 inline-flex items-start justify-start text-white"
            onMouseLeave={() => setOnhoverOpen(false)}
          >
            {open && (
              <div className="w-[40%] rounded-lg z-10 bg-[#1f2605] text-white">
                <ul className="flex flex-col justify-center">
                  {uniqueCategories.map((category) => (
                    <div
                      className="flex flex-col justify-center items-center cursor-pointer"
                      key={category}
                      onMouseEnter={() => handleCategoryHover(category)}
                      onClick={() => navigate(`/SearchedProducts/${category}`)}
                    >
                      <li className="flex justify-center text-white my-2 ">
                        {category}
                      </li>
                      <hr className="w-[50%] border-[white] items-center" />
                    </div>
                  ))}
                </ul>
              </div>
            )}

            {onhoverOpen && (
              <div className="w-[60%] min-h-[450px] rounded-lg z-10 bg-gray-300 text-white">
                <ul className="flex flex-col flex-wrap">
                  {uniqueTitles.map((title) => (
                    <div
                      className="flex flex-col justify-center items-center cursor-pointer"
                      key={title}
                      onClick={() => navigate(`/SearchedProducts/${title}`)}
                    >
                      <hr className="w-[50%] border-[white] items-center" />
                      <li className="flex justify-center text-black my-2">
                        {title}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
