import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../../components/producdCard";

import { Filter } from "../../../components/filterproducts";

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

  async function getProducts() {
    setLoading(true);
    try {
      const resp = await axios.get("http://localhost:3001/products");
      setProducts(resp.data);
      setLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p className=" flex justify-center text-[black]  m-auto font-bold">
          loading...
        </p>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
}
