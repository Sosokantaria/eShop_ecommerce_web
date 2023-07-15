import axios from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PrimaryBtn } from "../../../../../../components/buttons";




type TData={
  id:string
}

export default function DeleteProduct() {
  const {t}=useTranslation()
  const { register, handleSubmit, reset } = useForm<TData>();
  async function DeleteProduct(data:TData) {
    try {
         await axios.delete(`http://localhost:3001/products/${data.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
    } catch (error) {
    }
    reset({id:""})
}

  return (
    <section >
      <div className="bg-[#1f2605] py-8 px-4 mx-auto min-w-[50%] max-w-2xl rounded-lg w-full">
        <h2 className="mb-4 text-xl font-bold text-[white]">
        {t("titles.delete_product")}
        </h2>
        <form onSubmit={handleSubmit(DeleteProduct)}>
          <div className="flex flex-col sm:gap-6">
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-[white]">
                product id
              </label>
              <input
              {...register("id", { required: true })}
                type="text"
                name="id"
                id="id"
                className="bg-gray-50 border border-gray-300 text-[white] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Product id"
              />
            </div>
            <div className="flex justify-center w-full">
              <PrimaryBtn>{t("btn.delete_product")}</PrimaryBtn>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
