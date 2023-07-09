import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryBtn } from "../../../../../components/buttons";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "react-use-cart";

import "react-toastify/dist/ReactToastify.css";

type UseFormInputs = {
  NameOnCard: string;
  cardNumber: number;
  SecurityCode: number;
};

export default function Payment() {
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const { cartTotal, emptyCart } = useCart();
  const { handleSubmit } = useForm<UseFormInputs>();
  const notify = () => toast("The payment was successfully completed");
  const onSubmit = () => {
    notify(),
      emptyCart(),
      setNameOnCard(""),
      setCardNumber(""),
      setSecurityCode("");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex justify-center m-10">
        <div className="min-w-screen  max-w-[600px] bg-gray-200 flex items-center justify-center p-5  pb-5 ">
          <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
            <div className="w-full pt-1 pb-5">
              <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i className="mdi mdi-credit-card-outline text-3xl"></i>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase">
                Secure payment info
              </h1>
            </div>
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    required={true}
                    type="radio"
                    className=" h-5 w-5 text-indigo-500"
                    name="type"
                    id="type1"
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    className="h-8 ml-3"
                  />
                </label>
              </div>
              <div className="px-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    required={true}
                    type="radio"
                    className=" h-5 w-5 text-indigo-500"
                    name="type"
                    id="type2"
                  />
                  <img
                    src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                    className="h-8 ml-3"
                  />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  required={true}
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  value={cardNumber}
                  type="number"
                  onChange={(e) => setCardNumber(e.target.value)}
                  required={true}
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">
                  Expiration date
                </label>
                <div>
                  <select
                    required={true}
                    className=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  >
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <select
                  required={true}
                  className=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                >
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">Price</label>
              <div className="ml-1 my-2">{cartTotal}$</div>
              <div className="mb-10">
                <label className="font-bold text-sm mb-2 ml-1">
                  Security code
                </label>
                <div>
                  <input
                    value={securityCode}
                    type="number"
                    onChange={(e) => setSecurityCode(e.target.value)}
                    required={true}
                    className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="000"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <PrimaryBtn type="submit">
                  <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </PrimaryBtn>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
