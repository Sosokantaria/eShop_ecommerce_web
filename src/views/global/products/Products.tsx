import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../../components/producdCard";

import { Filter } from "../../../components/filterproducts";

import { Pagination } from "antd";
import { Navigation } from "../../../components/navigation";

type TProducts = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
};

export default function ProductsView() {
  const [products, setProducts] = useState<TProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  async function getProducts() {
    setLoading(true);
    const calcSkiptedProducts = (currentPage: number, limit: number) => {
      return (currentPage - 1) * limit;
    };

    try {
      const skipedProducts = calcSkiptedProducts(currentPage, 10);

      setTotalItems(
        (await axios.get("http://localhost:3001/products?")).data.length
      );
      const resp = await axios.get(
        `http://localhost:3001/products?skip=${skipedProducts}&take=${10}`
      );
      setProducts(resp.data);
      setLoading(false);
    } catch (error) {}
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <div>
      <Navigation />
      {loading ? (
        <p className=" flex justify-center text-[black]  m-auto font-bold">
          loading...
        </p>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Filter />
          <div className="flex flex-wrap m-auto   w-full p-6 justify-center gap-3">
            {products.map((product: TProducts) => (
              <div
                className="w-full max-w-sm bg-gray-200 flex flex-col flex-wrap justify-center items-center gap-3 py-5 rounded-lg shadow "
                key={product.id}
              >
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  item={product}
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
      )}
    </div>
  );
}
