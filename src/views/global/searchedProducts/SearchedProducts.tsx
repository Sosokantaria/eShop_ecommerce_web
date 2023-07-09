import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../../components/producdCard";

import type { TProducts } from "../../../types/product";

export default function SearchedProducts() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  async function SearchedProducts() {
    try {
      const resp = await axios.get(
        `http://localhost:3001/products?search=${params.value}`
      );

      setProducts(resp.data);
    } catch (error) {}
  }

  useEffect(() => {
    SearchedProducts();
  }, []);

  return (
    <div
      className="flex flex-wrap m-auto w-full p-6 justify-center gap-3"
    >
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
  );
}
