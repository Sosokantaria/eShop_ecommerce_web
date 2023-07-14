import { useEffect, useState } from "react";
import axios from "axios";
import useOnclickOutside from "react-cool-onclickoutside";

import { FaSearch } from "react-icons/fa";

import logo from "../../../../../../layouts/header/Logo/FqEhzfAVau7FtJvshFOPaUi72JCBk8mhIWUmOwwB.png";

export default function Search() {
  const [isopen, setIsopen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const ref = useOnclickOutside(() => {
    setIsopen(false);
  });
  async function SearchProducts() {
    try {
      const resp = await axios.get(
        `http://localhost:3001/products?search=${searchValue}`
      );
      setProducts(resp.data);
    } catch (error) {}
  }
  useEffect(() => {
    SearchProducts();
  }, [searchValue]);
  return (
    <>
      <div className="relative w-full lg:w-[600px] h-[50px] text-base  bg-slate-300 flex items-center gap-2 justify-between px-6 rounded-xl my-10">
        <input
          type="search"
          value={searchValue}
          onClick={()=>setIsopen(true)}
          onChange={(e) =>setSearchValue(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
        />
        <FaSearch className="w-5 h-5" />
        {isopen && (
          <div ref={ref}>
            {searchValue && (
              <div
                
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchValue &&
                  products.map((item: any) => (
                    <div
                      key={item.id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={logo} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm">
                          ID:{" "}
                          <span className="text-primeColor font-semibold">
                            {item.id}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
