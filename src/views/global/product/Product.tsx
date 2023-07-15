import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductCard } from "../../../components/producdCard";
import { TProducts } from "../../../types/product";

type TProductdata = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  category: string;
  description: string;
  item: any;
};

export default function ProductView() {
  const productId = useParams();
    const {t}=useTranslation()
  const [similarProducts, setSimilarProducts] = useState([]);
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
      const resp1 = await axios.get(
        `http://localhost:3001/products?category=${resp.data.category}`
      );
       setSimilarProducts(resp1.data);
    } catch (error) {}
  }
  useEffect(() => {
    GetProductData();
  }, []);

  return (
    <div >
      <div className=" flex flex-col gap-5 border-[gray] bg-[#fce2ad9a] rounded-lg shadow p-6 m-6">
        <div className="flex flex-wrap 2xl:gap-80 2xl:ml-20 xl:gap-60 xl:ml-10 lg:gap-40 lg:ml-8 md:gap-32 md:ml-4 sm:gap-10 s1:gap-3">
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
      <div className="flex flex-col items-center bg-[#fce2ad9a]  gap-6 rounded-lg shadow p-6 m-6">
        <span className=" font-bold text-3xl">{t("titles.similar_products")}</span>
        <div className="flex m-5 gap-5 justify-center items-center">
        {similarProducts.slice(0, 5).map((item: TProducts) => (
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
        ))}</div>
      </div>
    </div>
  );
}
