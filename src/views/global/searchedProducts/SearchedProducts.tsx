import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../../components/producdCard";

import type { TProducts } from "../../../types/product";
import { Pagination } from "antd";
import { Navigation } from "../../../components/navigation";

export default function SearchedProducts() {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();

  async function SearchedProducts() {
    const calcSkiptedProducts = (currentPage: number, limit: number) => {
      return (currentPage - 1) * limit;
    };

    try {
      const skipedProducts = calcSkiptedProducts(currentPage, 10);

      const resp = await axios.get(
        `http://localhost:3001/products?search=${
          params.value
        }&skip=${skipedProducts}&take=${10}`
      );
      setTotalItems(
        (
          await axios.get(
            `http://localhost:3001/products?search=${params.value}`
          )
        ).data.length
      );
      setProducts(resp.data);
    } catch (error) {}
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    SearchedProducts();
  }, [currentPage]);

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center flex-wrap m-auto w-full p-6 justify-center gap-3">
        <div className="flex flex-wrap m-auto   w-full p-6 justify-center gap-3">
          {products.map((item: TProducts) => (
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
        </div>
        <div className="m-10">
          <Pagination
            onChange={handlePageChange}
            current={currentPage}
            total={totalItems}
            pageSize={10}
          />
        </div>
      </div>
    </>
  );
}
