import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";

import { PrimaryBtn, LinkBtn } from "../../../../components/buttons";

import { Form, Input } from "antd";

import {
  authContext,
  TAuthorisationStage,
} from "../../../../contexts/authContext";

import { privateAxios } from "../../../../utils/PrivateAxios";

import { RoleContext } from "../../../../contexts/roleContext";

type TLoginForm = {
  email: string;
  password: string;
};

export default function LoginView() {
  const { setCurrentUser } = useContext(RoleContext);
  const { setStatus } = useContext(authContext);
  const {
    register,
    setError,
    formState: { errors },
  } = useForm<TLoginForm>();
  async function onSubmit(data: TLoginForm) {
    try {
      const resp = await axios.post("http://localhost:3001/auth/signin", data);
      if (resp.data.accessToken) {
        const decodedToken = jwt_decode(resp.data.accessToken);
        setCurrentUser({
          user_id: (decodedToken as { id: string; role: string }).id,
          user_role: (decodedToken as { id: string; role: string }).role,
        });
        privateAxios.defaults.headers.common.Authorization = `Bearer ${resp.data.accessToken}`;
        localStorage.setItem("accessToken", resp.data.accessToken);
        setStatus(TAuthorisationStage.AUTHORIZED);
      }
    } catch (error: any) {
      setError("root", { message: "Something went wrong " });
    }
  }

  return (
    <section className="bg-[rgb(240, 248, 255)]">
      <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg  shadow sm:max-w-md  ">
          <div className="p-6 space-y-4 text-[white] bg-[#1f2605] rounded-lg md:space-y-6 sm:p-8">
            <div className="flex justify-center">
              <h1 className="text-xl font-bold  md:text-2xl">login</h1>
            </div>
            <Form
              name="basic"
              onFinish={onSubmit}
              layout="vertical"
              className="text-[white]"
            >
              <Form.Item
                name="email"
                label={<label style={{ color: "white" }}>email</label>}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input {...register("email")} placeholder={"email"} />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: "white" }}>password</label>}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password {...register("password")} />
              </Form.Item>
              {errors?.root && (
                <p className="mt-2 text-sm text-red-600 ">root error message</p>
              )}
              <div className="flex flex-col gap-y-4">
                <div>
                  <PrimaryBtn
                    type="submit"
                  >
                    login
                  </PrimaryBtn>
                </div>
                <span className="text-sm flex text-[gray-1] font-medium  space-x-3">
                  <span>register question</span>
                  <Link to="/register">
                    <LinkBtn type="submit">register</LinkBtn>
                  </Link>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
