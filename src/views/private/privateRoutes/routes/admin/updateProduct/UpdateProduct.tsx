import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryBtn } from "../../../../../../components/buttons";

type TData = {
  title: string;
  price: number;
  category: string;
  description: string;
};
export default function UpdateProduct() {
  const { register, handleSubmit, reset } = useForm<TData>();
  const [id, setId] = useState("");
  const [checkboxTitle, setCheckboxTitle] = useState(false);
  const [checkboxDecription, setCheckboxDecription] = useState(false);
  const [checkboxPrice, setCheckboxPrice] = useState(false);
  async function UpdateProduct(data: TData) {
    console.log(data);

    try {
      await axios.put(`http://localhost:3001/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setId("");
    } catch (error) {
      console.log(error);
    }
    reset({
      title: "",
      price: 0,
      category: "",
      description: "",
    });
  }

  return (
    <section >
      <div className="w-full bg-[#1f2605] rounded-xl p-5 flex flex-col gap-5 justify-between">
        <div className="flex gap-5 max-sm:flex-col">
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center pl-3">
                <input
                  id="react-checkbox-list"
                  type="checkbox"
                  value=""
                  onChange={() => setCheckboxTitle(!checkboxTitle)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="react-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  title
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="angular-checkbox-list"
                  type="checkbox"
                  value=""
                  onChange={() => setCheckboxDecription(!checkboxDecription)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="angular-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  description
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox-list"
                  type="checkbox"
                  value=""
                  onChange={() => setCheckboxPrice(!checkboxPrice)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="laravel-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  price
                </label>
              </div>
            </li>
          </ul>
        </div>
        <form
          className="flex flex-col gap-5 justify-between items-center max-xl:flex-col max-xl:gap-5"
          onSubmit={handleSubmit(UpdateProduct)}
        >
          <div className="flex flex-col gap-4 max-xl:w-full">
            <div className="dark:text-white">
              <p>ID</p>
              <input
                className="w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                name="id"
                id="id"
              />
            </div>
            {checkboxTitle && (
              <div className="dark:text-white">
                <p>title</p>
                <input
                  className="w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  {...register("title", { required: true })}
                  type="text"
                  name="title"
                  id="title"
                />
              </div>
            )}
            {checkboxDecription && (
              <div className="w-[800px] dark:text-white">
                <p>description</p>
                <input
                  className="w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  {...register("description", { required: true })}
                  type="text"
                  name="description"
                  id="description"
                />
              </div>
            )}
            {checkboxPrice && (
              <div className="dark:text-white">
                <p>price</p>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  type="number"
                  {...register("price", {
                    valueAsNumber: true,
                    required: true,
                  })}
                  name="price"
                  id="price"
                />
              </div>
            )}
          </div>
          <PrimaryBtn
            type="submit"
            >
            change
          </PrimaryBtn>
        </form>
      </div>
    </section>
  );
}
