import { useContext } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useOnclickOutside from "react-cool-onclickoutside";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { DefaultBtn, PrimaryBtn, TextBtn } from "../../components/buttons";
import { CartContext } from "../../contexts/cartContext";
import { authContext } from "../../contexts/authContext";

export function CartModal() {
  const { t } = useTranslation();
  const { modal, setModal } = useContext(CartContext);
  const { status } = useContext(authContext);
  const {
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const ref = useOnclickOutside(() => {
    setModal(false);
  });
  return (
    <>
      {modal && (
        <div
          className="relative z-40 "
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={() => setModal(false)}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
          <div
            ref={ref}
            className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <div className="pointer-events-auto w-screen max-w-md flex h-full flex-col overflow-y-scroll  bg-[white] shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    {t("titles.cart")}
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      onClick={() => setModal(false)}
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {items.map((item: any) => (
                        <div key={item.id}>
                          <li className="flex py-6 flex-wrap items-center justify-center p-5">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.thumbnail}
                                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <p className="ml-4">{item.price}$</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.category}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <DefaultBtn
                                  type="submit"
                                  className="text-2xl"
                                  onClick={() => {
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity - 1
                                    );
                                  }}
                                >
                                  <AiFillMinusCircle />
                                </DefaultBtn>
                                <div className="text-xl">{item.quantity}</div>
                                <DefaultBtn
                                  type="submit"
                                  className="text-2xl"
                                  onClick={() => {
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity + 1
                                    );
                                  }}
                                >
                                  <AiFillPlusCircle />
                                </DefaultBtn>

                                <div className="flex">
                                  <div className="flex justify-between"></div>
                                  <TextBtn
                                    onClick={() => removeItem(item.id)}
                                    type="submit"
                                  >
                                    {t("btn.remove")}
                                  </TextBtn>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 flex flex-col gap-5 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>{t("texts.total_items")}</p>
                  <p>{totalItems}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>{t("texts.subtotal")}</p>
                  <p>{cartTotal}$</p>
                </div>
                <PrimaryBtn onClick={() => emptyCart()} type="submit">
                  {t("btn.remove_all_items")}
                </PrimaryBtn>
                {status === "authorized" ? (
                  <Link to="/payment" className="w-full">
                    <PrimaryBtn
                      type="submit"
                      className="w-full font-bold"
                      onClick={() => setModal(false)}
                    >
                      {t("btn.buy")}
                    </PrimaryBtn>
                  </Link>
                ) : (
                  <Link to="/login/login" className="w-full">
                    <PrimaryBtn
                      type="submit"
                      className="w-full font-bold"
                      onClick={() => setModal(false)}
                    >
                      {t("btn.buy")}
                    </PrimaryBtn>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
