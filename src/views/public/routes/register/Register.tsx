import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { PrimaryBtn, LinkBtn } from "../../../../components/buttons";

import { Form, Input } from "antd";

import axios from "axios";
import { Navigation } from "../../../../components/navigation";

type TRegisterForm = {
  userName: string;
  email: string;
  password: string;
  role: string;
};

export default function RegisterView() {
  const { t } = useTranslation();
  const [created, setCreated] = useState<boolean>(false);
  const {
    register,
    setError,
    formState: { errors },
  } = useForm<TRegisterForm>();

  async function onSubmit(data: TRegisterForm) {
    try {
      const resp = await axios.post("http://localhost:3001/auth/signup", {
        ...data,
        role: "USER",
      });
      if (resp.data?.id) {
        setCreated(true);
      }
    } catch (error: any) {
      setError("root", { message: error.response.data?.errors?.[0].msg });
    }
  }

  return (
    <>
      <Navigation />
      <section className="bg-[rgb(240, 248, 255)]">
        <div className="flex flex-col items-center  mt-40  px-6 mx-auto py-0">
          <div className="w-full m-auto text-[white] rounded-lg shadow bg-[#1f2605]  sm:max-w-sm p-6  ">
            <div className="flex justify-center ">
              <h1 className="text-xl font-bold md:text-2xl ">
                {t("titles.register")}
              </h1>
            </div>{" "}
            {created ? (
              <span className="flex  font-medium items-center justify-center text-[green]  space-x-3">
                <span>{t("created_user")}</span>
                <Link to="/login">
                  <LinkBtn type="submit">
                    <p>{t("btn.login")}</p>
                  </LinkBtn>
                </Link>
              </span>
            ) : (
              <Form name="basic" onFinish={onSubmit} layout="vertical">
                <Form.Item
                  name="username"
                  label={
                    <label style={{ color: "white" }}>
                      {t("labels.userName")}
                    </label>
                  }
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input {...register("userName")} placeholder={"username"} />
                </Form.Item>
                <Form.Item
                  label={
                    <label style={{ color: "white" }}>
                      {t("labels.email")}
                    </label>
                  }
                  name="email"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input {...register("email")} placeholder={"email"} />
                </Form.Item>
                <Form.Item
                  label={
                    <label style={{ color: "white" }}>
                      {t("labels.password")}
                    </label>
                  }
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password {...register("password")} />
                </Form.Item>
                {errors?.root && (
                  <p className="mt-2 space-x-2 text-sm text-red-600 ">
                    <span className="font-bold">Oopss!</span>
                    <span>{errors.root.message}</span>
                  </p>
                )}
                <div className="flex flex-col gap-y-4">
                  <div>
                    <PrimaryBtn type="submit">{t("btn.register")}</PrimaryBtn>
                  </div>
                  <p className="text-sm font-medium text-[white] flex space-x-3">
                    <span>{t("texts.question.register")}</span>
                    <Link to="/login/login">
                      <LinkBtn type="submit">
                        <span>{t("btn.login")}</span>
                      </LinkBtn>
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
