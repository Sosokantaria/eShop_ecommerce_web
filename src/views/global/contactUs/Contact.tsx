import { useTranslation } from "react-i18next";

import { Address } from "../../../components/address";
import { PrimaryBtn } from "../../../components/buttons";
import { Navigation } from "../../../components/navigation";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <div className="rounded-lg border-[gray] bg-[#fce2ad9a] shadow p-6 m-6">
        <section className="bg-white ">
          <h2 className="pt-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            {t("titles.contuct_us")}
          </h2>
          <p className="mb-8  font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            {t("texts.contuct_us")}
          </p>
          <div className="py-8 px-4 mx-auto max-w-screen-md">
            <form className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t("labels.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder={t("placeHolder.email")}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("labels.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder={t("placeHolder.subject")}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("labels.your_message")}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder={t("placeHolder.leave_coment")}
                ></textarea>
              </div>
              <PrimaryBtn
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                {t("btn.send_message")}
              </PrimaryBtn>
              <div className="flex gap-4  flex-col items-center mb-10 justify-center">
                <Address />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
