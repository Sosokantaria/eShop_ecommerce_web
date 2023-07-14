import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../../components/producdCard";

import type { TProducts } from "../../../types/product";
import { Filter } from "../../../components/filterproducts";

export default function FilteredView() {
  const param: any = useParams();
  const [array, setArray] = useState<TProducts[]>([]);
  async function SetProductsArray() {
    try {
      const resp = (await axios.get(`http://localhost:3001/products`)).data;
      let arr: TProducts[] = [];
      setArray(arr);
      resp.filter((item: TProducts) => {
        if (
          Number(param.min) < Number(item.price) &&
          Number(item.price) < Number(param.max)
        ) {
          arr.push(item);
        }
      });
    } catch (error) {}
  }

  useEffect(() => {
    SetProductsArray();
  }, [param]);

  return (
    <div>
     
      <Filter />
      <div className="flex flex-wrap m-auto w-full p-6 justify-center gap-3">
        {array.map((item: any) => (
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
    </div>
  );
}
