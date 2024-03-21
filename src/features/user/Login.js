import { useState } from "react";
import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import { useFormik } from "formik";
import {
  validationPasword,
  validationPhone,
} from "../../components/yup/validationSchema";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import InputTextFormik from "../../components/inputFormik/InputTextFormik";
import * as Yup from "yup";
import { FetchLogin } from "./service/FetchLogin";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      sodienthoai: "",
      matkhau: "",
    },

    validationSchema: Yup.object({
      matkhau: validationPasword,
      sodienthoai: validationPhone,
    }),

    onSubmit: (values) => {
      console.log(" xử lý submit ", values);
      setLoading(true);
      const requestAPI = dispatch(FetchLogin(values));
      try {
        requestAPI.then((response) => {
          setLoading(false);
          console.log("response:", response);

          if (response.payload.token) {
            localStorage.setItem("token", response.payload.token);

            // set token mặc định
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.payload.token}`;
            // window.location.href = "/app/welcome";
          } else {
            console.log("Đăng nhập thất bại");
            dispatch(
              showNotification({ message: "Đăng nhập thất bại", status: 0 })
            );
          }
        });
      } catch (error) {}
    },
  });

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Đăng nhập
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <InputTextFormik
                  labelTitle="Số điện thoại"
                  type="number"
                  name="sodienthoai"
                  onChange={formik.handleChange}
                  value={formik.values.sodienthoai}
                  errors={formik.errors.sodienthoai}
                />

                <InputTextFormik
                  labelTitle="Mật khẩu"
                  type="password"
                  name="matkhau"
                  onChange={formik.handleChange}
                  value={formik.values.matkhau}
                  errors={formik.errors.matkhau}
                />
              </div>

              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Quên mật khẩu?
                  </span>
                </Link>
              </div>

              <button type="submit" className={"btn mt-2 w-full btn-primary"}>
                {loading && (
                  <span className="loading loading-dots loading-sm"></span>
                )}
                Đăng nhập
              </button>

              <div className="text-center mt-4">
                Bạn chưa có tài khoản ?{" "}
                <Link to="/register">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200 text-primary">
                    Đăng kí
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
