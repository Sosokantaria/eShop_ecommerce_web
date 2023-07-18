import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link,useNavigate } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";

import {
  TAuthorisationStage,
  authContext,
} from "../../../contexts/authContext";
import { RoleContext } from "../../../contexts/roleContext";

import { TextBtn } from "../../../components/buttons";

import { HiOutlineLogout } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";


export function ProfileInfo() {
  const{t}=useTranslation()
  const navigate=useNavigate()
  const { currentUser } = useContext(RoleContext);
  const { status, setStatus } = useContext(authContext);
  const [isopen, setIsopen] = useState<boolean>(false);
  function HandleLogout() {
    return (
      localStorage.removeItem("accessToken"),
      setStatus(TAuthorisationStage.UNAUTHORIZED)
    );
  }
  const ref = useOnclickOutside(() => {
    setIsopen(false);
  });
  return (
    <div className="relative flex flex-col items-right">
      <div
        className="items-center rounded-lg p-2"
        onClick={() => setIsopen(!isopen)}
      >
        <CgProfile className="text-gray-300 hover:text-[#faad14]" size={30} />
      </div>
      {isopen && (
        <div
          ref={ref}
          className="absolute right-0 z-10 mt-12 bg-[white] items-center origin-top-right rounded-md"
        >
          {status===TAuthorisationStage.AUTHORIZED ? (
            <div className="flex flex-col m-2 items-center">
              {currentUser.user_role==="ADMIN" && (
                <>
                  <TextBtn type="submit">
                    <Link
                      to="/adminView"
                      onClick={() => setIsopen(!isopen)}
                    >
                      {t("btn.adminPanel")}
                    </Link>
                  </TextBtn>
                  <hr className=" mt-1 border-[black] sm:mx-auto  " />
                </>
              )}
              <TextBtn type="submit">
                <Link
                  to="/userView"
                  onClick={() => setIsopen(!isopen)}
                >
                  {t("btn.profile_info")}
                </Link>
              </TextBtn>
              <hr className=" mt-1 border-[black] sm:mx-auto  " />
              <TextBtn
                type="submit"
                onClick={() => {
                  HandleLogout(), setIsopen(!isopen);
                  navigate("/")
                }}
                className="flex items-center gap-1"
              >
                <span>{t("btn.logout")}</span>
                <HiOutlineLogout />
              </TextBtn>
            </div>
          ) : (
            <div className="flex flex-col m-1 items-center ">
              <Link to="/Login/Login">
                <TextBtn type="submit" onClick={() => setIsopen(!isopen)}>
                {t("btn.login")}
                </TextBtn>
              </Link>
              <hr className=" mt-1 text-[gray] sm:mx-auto  " />
              <Link to="register/Register">
                <TextBtn type="submit" onClick={() => setIsopen(!isopen)}>
                {t("btn.register")}
                </TextBtn>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
