import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import useOnclickOutside from "react-cool-onclickoutside";

import {
  TAuthorisationStage,
  authContext,
} from "../../../contexts/authContext";
import { RoleContext } from "../../../contexts/roleContext";
import { TLocalstorage } from "../../../types/Localstorage";

import { HiOutlineLogout } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";


export function ProfileInfo() {
  
  const { currentUser } = useContext(RoleContext);
  const { status, setStatus } = useContext(authContext);
  const [isopen, setIsopen] = useState<boolean>(false);
  function HandleLogout() {
    return (
      localStorage.removeItem(TLocalstorage.ACCESSTOKEN),
      setStatus(TAuthorisationStage.UNAUTHORIZED)
    );
  }
  const ref = useOnclickOutside(() => {
    setIsopen(false);
  });
  return (
    <div className="relative flex flex-col items-right">
      <div
        className="items-center rounded-lg p-2  hover:bg-[gray]"
        onClick={() => setIsopen(!isopen)}
      >
        <CgProfile className="text-[white] " size={30} />
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
                  <Button type="text">
                    <Link
                      to="/admin-view"
                      className="font-medium rounded-lg text-sm  "
                      onClick={() => setIsopen(!isopen)}
                    >
                      admin panel
                    </Link>
                  </Button>
                  <hr className=" mt-1 border-[black] sm:mx-auto  " />
                </>
              )}
              <Button type="text">
                <Link
                  to="/user-view"
                  className="font-medium rounded-lg text-sm  "
                  onClick={() => setIsopen(!isopen)}
                >
                  profile info
                </Link>
              </Button>
              <hr className=" mt-1 border-[black] sm:mx-auto  " />
              <Button
                type="text"
                onClick={() => {
                  HandleLogout(), setIsopen(!isopen);
                }}
                className="flex items-center gap-1"
              >
                <span>logaut</span>
                <HiOutlineLogout />
              </Button>
            </div>
          ) : (
            <div className="flex flex-col m-1 items-center ">
              <Link to="login">
                <Button type="text" onClick={() => setIsopen(!isopen)}>
                  login
                </Button>
              </Link>
              <hr className=" mt-1 text-[gray] sm:mx-auto  " />
              <Link to="register">
                <Button type="text" onClick={() => setIsopen(!isopen)}>
                  register
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
