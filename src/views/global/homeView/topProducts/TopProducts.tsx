import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import {useTranslation} from "react-i18next"


import { TProducts } from "../../../../types/product";
import { ProductCard } from "../../../../components/producdCard";



function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"200px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick  } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"black", borderRadius:"200px"}}
        onClick={onClick}
      />
    );
  }

export default function () {
  const [similarProducts, setSimilarProducts] = useState([]);
const { t }=useTranslation()
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="font-bold text-2xl"> {t("texts.top_products")}</h2>
      <Slider {...settings}>
        {similarProducts.map((item: TProducts) => (
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
      </Slider>
    </div>
  );
}

