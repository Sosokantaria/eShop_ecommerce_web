import { useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import useOnclickOutside from "react-cool-onclickoutside";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ge",
    name: "ქართული",
    country_code: "ge",
  },
];

export function Select_languages() {
  const [isopen, setIsopen] = useState<boolean>(false);
  const [currentCode, setCurrentCode] = useState<string>("gb");
  const currentLanguageCode = cookies.get("i18next") || "en";

  const ref = useOnclickOutside(() => {
    setIsopen(false);
  });
  return (
    <div ref={ref} className="relative inline-block  flex-col items-right">
      <button
        onClick={() => setIsopen(!isopen)}
        id="dropdownDefaultButton"
        className="inline-flex  justify-center  rounded-md bg-white px-2 py-1.5 text-[black] shadow-sm ring-1 "
        type="button"
      >
        <span className={`flag-icon flag-icon-${currentCode} mx-2`}></span>
        <svg
          className="w-4  ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isopen && (
        <div
          id="dropdown"
          
          className="absolute right-0 z-10  w-28 items-center text-[black] origin-top-right rounded-md bg-white "
        >
          <ul className="text-sm mb-0">
            {languages.map(({ code, name, country_code }) => (
              <li
                onClick={() => {
                  setIsopen(false), setCurrentCode(country_code);
                }}
                key={country_code}
                style={{
                  opacity: currentLanguageCode === code ? 0.5 : 1,
                }}
              >
                <div
                  className={classNames(
                    "block  py-2 hover:bg-gray-100 rounded ",
                    {
                      disabled: currentLanguageCode === code,
                    }
                  )}
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}