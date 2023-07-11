import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";

import { SearchContext } from "../../../contexts/searchContext";

import { PrimaryBtn } from "../../../components/buttons";

import { BiSearchAlt } from "react-icons/bi";
import { Input } from "antd";

import Logo from "../Logo/FqEhzfAVau7FtJvshFOPaUi72JCBk8mhIWUmOwwB.png";

export function Search() {
  const { search, setSearch } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState<string>("");
  const [products, setProducts] = useState([]);

  const ref = useOnclickOutside(() => {
    setSearch(false);
  });
  const navigate = useNavigate();
  function NavToSearchedProducts() {
    if (searchValue !== "") {
      navigate(`SearchedProducts/${searchValue}`);
      setSearch(false);
      setSearchValue("");
      setProducts([]);
    }
  }
  async function searchProducts() {
    if (searchValue !== "") {
      try {
        const resp = await axios.get(
          `http://localhost:3001/products?search=${searchValue}`
        );
        setProducts(resp.data);
      } catch (error) {}
    }
  }

  useEffect(() => {
    searchProducts();
  }, [searchValue]);

  return (
    <div className=" bg-[gray] fixed overflow-hidden rounded-lg w-[80%] z-40">
      {search && (
        <div
          className="relative z-40"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={() => setSearch(false)}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
          <div className="fixed inset-0 flex m-10 max-h-[60vh] items-center justify-center">
            <div
              ref={ref}
              className="rounded-lg w-full max-w-3xl  h-auto  flex-col  bg-[white] shadow-xl"
            >
              <div className="flex flex-col w-full p-6 justify-center items-center">
                <div className="flex w-[90%] gap-4">
                  <Input
                    placeholder="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <PrimaryBtn
                    onClick={() => {
                      NavToSearchedProducts();
                    }}
                  >
                    <BiSearchAlt size={20} />
                  </PrimaryBtn>
                </div>
                {searchValue && (
                  <div
                    className={`w-full mx-auto h-96 bg-white mt-3  overflow-y-scroll shadow-lg scrollbar-hide cursor-pointer`}
                  >
                    {products.length > 0 ? (
                      products.map((item: { id: string; title: string }) => (
                        <div
                          className="flex-wrap overflow-hidden max-w-[600px] h-auto p-3 bg-gray-100 m-5 flex items-center gap-3"
                          key={item.id}
                          onClick={() => {
                            setProducts([]),
                              setSearchValue(""),
                              setSearch(false),
                              navigate(`/product/${item.id}`);
                          }}
                        >
                          <img className="w-24" src={Logo} />
                          <div className="flex flex-col gap-1">
                            <p className="font-semibold text-lg">
                              {item.title}
                            </p>
                            <p className="text-sm">
                              <span>ID:</span>
                              <span className="text-primeColor font-semibold">
                                {item.id}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-[red] flex items-center justify-center h-full cursor-default">
                        could not find product
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
