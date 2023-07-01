import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../../components/productCard";

type TProductdata = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  category: string;
  description: string;
  item:any
};

export default function ProductView() {
  const productId = useParams();
  const [productData, setProductData] = useState<TProductdata>(
    {} as TProductdata
  );

  async function GetProductData() {
    try {
      const resp = await axios.get(
        `http://localhost:3001/products/${productId.id}`
      );
      if (resp) {
        setProductData(resp.data);
      }
    } catch (error) {}
  }
  useEffect(() => {
    GetProductData();
  }, []);

  return (
    <div>
      <div className="flex flex-col flex-wrap gap-10 border-[gray] bg-[#fce2ad9a] rounded-lg shadow p-6 m-6">
        <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-6 items-center ">
          <ProductCard
            id={productData?.id}
            price={productData?.price}
            title={productData?.title}
            description={productData?.description}
            item={productData}
            category={productData?.category}
          />
        </div>
        <div className="font-bold ">{productData.category}:</div>
        <div>{productData.description}</div>
      </div>
      <div className="flex bg-[#fce2ad9a]  gap-6 rounded-lg shadow p-6 m-6">similar items:</div>
    </div>
  );
}
