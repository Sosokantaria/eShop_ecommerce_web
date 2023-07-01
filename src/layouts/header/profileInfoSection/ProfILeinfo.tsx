import { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
                      to="/admin-view"
                      onClick={() => setIsopen(!isopen)}
                    >
                      admin panel
                    </Link>
                  </TextBtn>
                  <hr className=" mt-1 border-[black] sm:mx-auto  " />
                </>
              )}
              <TextBtn type="submit">
                <Link
                  to="/user-view"
                  onClick={() => setIsopen(!isopen)}
                >
                  profile info
                </Link>
              </TextBtn>
              <hr className=" mt-1 border-[black] sm:mx-auto  " />
              <TextBtn
                type="submit"
                onClick={() => {
                  HandleLogout(), setIsopen(!isopen);
                }}
                className="flex items-center gap-1"
              >
                <span>logaut</span>
                <HiOutlineLogout />
              </TextBtn>
            </div>
          ) : (
            <div className="flex flex-col m-1 items-center ">
              <Link to="login">
                <TextBtn type="submit" onClick={() => setIsopen(!isopen)}>
                  login
                </TextBtn>
              </Link>
              <hr className=" mt-1 text-[gray] sm:mx-auto  " />
              <Link to="register">
                <TextBtn type="submit" onClick={() => setIsopen(!isopen)}>
                  register
                </TextBtn>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
