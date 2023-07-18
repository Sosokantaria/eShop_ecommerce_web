import { useState, useEffect } from "react";
import { SlickCarousel } from "../../../components/slickCarousel";
import axios from "axios";
import { TProducts } from "../../../types/product";
import { ProductCard } from "../../../components/producdCard";
import { Navigation } from "../../../components/navigation";

export default function HomeView() {
  const [similarProducts, setSimilarProducts] = useState([]);
  async function GetProductData() {
    try {
      const resp = await axios.get(
        `http://localhost:3001/products/465562d5-6001-40c6-bd8d-0403ec10c88d`
      );

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
    <>
      <Navigation />
      <div>
        <div className="my-10">
          <SlickCarousel />
          <div className="flex flex-col  justify-center ">
            <div className="flex flex-col w-full my-10 gap-5 justify-center items-center bg-gray-200 rounded-lg">
              <span className="font-bold text-2xl ">Top products</span>
              <div className="flex gap-3">
                {similarProducts.slice(0, 4).map((item: TProducts) => (
                  <div
                    key={item.id}
                    className="w-full max-w-sm m-3 bg-gray-400 px-3 border-[gray] bg-[#fce2ad9a] flex flex-col  flex-wrap justify-center items-center gap-3 py-5 rounded-lg shadow "
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
          </div>
        </div>
      </div>
    </>
  );
}
