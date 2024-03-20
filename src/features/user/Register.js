import { useState } from "react";
import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputTextFormik from "../../components/inputFormik/InputTextFormik";
import {
    validationAddress,
    validationEmail,
    validationPastDay,
    validationPasword,
    validationPhone,
    validationRequired
}
    from "../../components/yup/validationSchema";
import { useDispatch } from "react-redux";
import { FetchRegister } from "./service/FetchRegister";
import { showNotification } from "../common/headerSlice";

function Register() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            sodienthoai: "",
            matkhau: "",
            email: "",
            diachi: "",
            hodem: "",
            ten: "",
            ngaysinh: "",
        },

        validationSchema: Yup.object({
            email: validationEmail,
            matkhau: validationPasword,
            sodienthoai: validationPhone,
            diachi: validationAddress,
            ngaysinh: validationPastDay,
            ten: validationRequired,
            hodem: validationRequired

        }),

        onSubmit: (values) => {
            console.log(" xử lý submit ", values);
            setLoading(true)
            const requestAPI = dispatch(FetchRegister(values));
            try {
                requestAPI.then((response) => {
                    setLoading(false)
                    console.log("response:", response);
                    if (response.payload) {
                        dispatch(
                            showNotification({
                                message: "Đăng kí thành công",
                                status: 1,
                            })
                        );
                        window.location.href = '/app/welcome'
                    } else {
                        dispatch(
                            showNotification({ message: "Thêm khách hàng thất bại", status: 0 })
                        );
                    }
                });
            } catch (error) { }
        },
    });

    console.log("formik values: ", formik.values);

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className="">
                        <LandingIntro />
                    </div>
                    <div className="py-24 px-10">
                        <h2 className="text-2xl font-semibold mb-2 text-center">
                            Đăng kí tài khoản
                        </h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">

                                <InputTextFormik
                                    labelTitle="Tên"
                                    type="text"
                                    name="ten"
                                    onChange={formik.handleChange}
                                    value={formik.values.ten}
                                    errors={formik.errors.ten}
                                />

                                <InputTextFormik
                                    labelTitle="Họ đệm"
                                    type="text"
                                    name="hodem"
                                    onChange={formik.handleChange}
                                    value={formik.values.hodem}
                                    errors={formik.errors.hodem}
                                />

                                <InputTextFormik
                                    labelTitle="Số điện thoại"
                                    type="text"
                                    name="sodienthoai"
                                    onChange={formik.handleChange}
                                    value={formik.values.sodienthoai}
                                    errors={formik.errors.sodienthoai}
                                />

                                <InputTextFormik
                                    labelTitle="Địa chỉ"
                                    type="text"
                                    name="diachi"
                                    onChange={formik.handleChange}
                                    value={formik.values.diachi}
                                    errors={formik.errors.diachi}
                                />

                                <InputTextFormik
                                    labelTitle="Ngày sinh"
                                    type="date"
                                    name="ngaysinh"
                                    onChange={formik.handleChange}
                                    value={formik.values.ngaysinh}
                                    errors={formik.errors.ngaysinh}
                                />


                                <InputTextFormik
                                    labelTitle="Email"
                                    type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    errors={formik.errors.email}
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

                            <button
                                type="submit"
                                className={
                                    "btn text-md mt-2 w-full btn-primary" +
                                    (loading ? " loading" : "")
                                }
                                onClick={formik.handleSubmit} // Thêm sự kiện onClick vào đây
                            >
                                <span className="loading loading-dots loading-sm"></span>
                                Đăng kí
                            </button>

                            <div className="text-center mt-4">
                                Bạn đã có tài khoản?{" "}
                                <Link to="/login">
                                    <span className="text-primary  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                                        Đăng nhập
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

export default Register;
