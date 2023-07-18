import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { Filter } from "../../../components/filterproducts";
import { ProductCard } from "../../../components/producdCard";

import type { TProducts } from "../../../types/product";
import { Navigation } from "../../../components/navigation";
import { Pagination } from "antd";

export default function FilteredView() {
  const param: any = useParams();
  const [array, setArray] = useState<TProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArray = array.slice(startIndex, endIndex);
  let arr: TProducts[] = [];

  async function SetProductsArray() {
    try {
      const resp = (await axios.get(`http://localhost:3001/products?`)).data;

      resp.filter((item: TProducts) => {
        if (
          Number(param.min) < Number(item.price) &&
          Number(item.price) < Number(param.max)
        ) {
          arr.push(item);
        }
        setArray(arr);
      });
    } catch (error) {}
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    SetProductsArray();
  }, [param, currentPage]);

  return (
    <>
      <Navigation />
      <div className="flex flex-col justify-center items-center">
        <Filter />
        <div className="flex flex-wrap  m-auto w-full p-6 justify-center gap-3">
          {paginatedArray.length === 0 ? (
            <div className="text-[red] flex items-center justify-center h-full cursor-default">
              could not find product
            </div>
          ) : (
            <>
              {paginatedArray.map((item: any) => (
                <div
                  key={item.id}
                  className="w-full max-w-sm bg-gray-200 border-[gray] bg-[#fce2ad9a] flex flex-col  flex-wrap justify-center items-center gap-3 py-5 rounded-lg shadow "
                >
                  <ProductCard
                    id={item.id}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                    item={item}
                    category={item.category}
                  />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="m-10">
          <Pagination
            onChange={handlePageChange}
            current={currentPage}
            total={array.length}
            pageSize={itemsPerPage}
          />
        </div>
      </div>
    </>
  );
}
