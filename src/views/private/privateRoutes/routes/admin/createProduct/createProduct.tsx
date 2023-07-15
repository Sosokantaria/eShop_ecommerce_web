import axios from "axios";
import { useForm } from "react-hook-form";
import { PrimaryBtn } from "../../../../../../components/buttons";
import { useTranslation } from "react-i18next";

type TData = {
  title: string;
  price: number | null;
  category: string;
  description: string;
};

export default function CreateProduct() {
  const {t}=useTranslation()
  const { register, handleSubmit, reset } = useForm<TData>();

  async function OnSubmit(data: TData) {
    try {
      await axios.post(`http://localhost:3001/products`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    } catch (error) {}

    reset({
      title: "",
      price: null,
      category: "",
      description: "",
    });
  }

  return (
    <section >
      <div className="py-8 px-4 mx-auto max-w-2xl rounded-lg bg-[#1f2605]  ">
        <h2 className="mb-4 text-xl font-bold text-[white]">
         {t("titles.create_product")}
        </h2>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-[white]">
              {t("labels.title")}
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-[white] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder={t("placeHolder.product_title")}
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-[white]">
               {t("labels.price")}
              </label>
              <input
                type="number"
                {...register("price", {
                  valueAsNumber: true,
                  required: true,
                })}
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-[white] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="$2999"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-[white]">
              {t("labels.category")}
              </label>
              <input
                {...register("category", { required: true })}
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-[white] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-[white]">
              {t("labels.description")}
              </label>
              <textarea
                {...register("description", { required: true })}
                id="description"
                className="block p-2.5 w-full text-sm text-[black] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder={t("placeHolder.description")}
              ></textarea>
            </div>
            <div className="flex justify-center w-full">
              <PrimaryBtn type="submit">{t("btn.create_product")}</PrimaryBtn>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
