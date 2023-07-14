import type { TProducts } from "../../types/product"
 
export function ProductsMaping(){
    return<div
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
}