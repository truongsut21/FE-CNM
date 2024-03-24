import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";

import { getInfoUser } from "../../../app/userSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  validationAddress,
  validationEmail,
  validationPastDay,
  validationPasword,
  validationPhone,
  validationRequired,
} from "../../../components/yup/validationSchema";
import InputTextFormik from "../../../components/inputFormik/InputTextFormik";
import InputRadioFormik from "../../../components/inputFormik/InputRadioFormik";
import { FetchUpdateInfoUser } from "../service/fetchUpdateInfoUser";

function ProfileSettings() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      sodienthoai: "",
      email: "",
      diachi: "",
      hodem: "",
      ten: "",
      ngaysinh: "",
      gioitinh: "0",
      matkhau: "",
    },

    validationSchema: Yup.object({
      email: validationEmail,
      sodienthoai: validationPhone,
      diachi: validationAddress,
      ngaysinh: validationPastDay,
      ten: validationRequired,
      hodem: validationRequired,
    }),

    onSubmit: (values) => {
      console.log("values onSubmit:", values);

      console.log(" xử lý submit ", values);

      const requestAPI = dispatch(FetchUpdateInfoUser(values));
      try {
        requestAPI.then((response) => {
          if (response.payload) {
            if (response.payload.success) {
              dispatch(
                showNotification({
                  message: "Cập nhật thành công",
                  status: 1,
                })
              );
            } else {
              dispatch(
                showNotification({
                  message: response.payload.message,
                  status: 0,
                })
              );
            }
          } else {
            dispatch(
              showNotification({ message: "Cập nhật thất bại", status: 0 })
            );
          }
        });
      } catch (error) {}
    },
  });

  useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  useEffect(() => {
    formik.setFieldValue("ten", user.ten || "fix tạm");
    formik.setFieldValue("hodem", user.hodem || "fix tạm");
    formik.setFieldValue("sodienthoai", user.sodienthoai || "1234567890");
    formik.setFieldValue("email", user.email || "a@gmail.com");
    formik.setFieldValue("diachi", user.diachi || "fix tạm");
    formik.setFieldValue("gioitinh", user.gioitinh || "0");
    formik.setFieldValue("matkhau", user.matkhau || "fix tạm");

    formik.setFieldValue(
      "ngaysinh",
      moment(user.ngaysinh).format("YYYY-MM-DD")
    );
  }, [user]);

  console.log("formik:", formik.values);

  return (
    <>
      <TitleCard title="Thông tin người dùng" topMargin="mt-2">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputTextFormik
              labelTitle="Họ đệm"
              type="text"
              name="hodem"
              onChange={formik.handleChange}
              value={formik.values.hodem}
              errors={formik.errors.hodem}
            />

            <InputTextFormik
              labelTitle="Tên"
              type="text"
              name="ten"
              onChange={formik.handleChange}
              value={formik.values.ten}
              errors={formik.errors.ten}
            />

            <InputTextFormik
              labelTitle="Số điện thoại"
              type="text"
              name="ten"
              disabled={true}
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

            <InputTextFormik
              labelTitle="Email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email}
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
              labelTitle="Địa chỉ"
              type="text"
              name="diachi"
              onChange={formik.handleChange}
              value={formik.values.diachi}
              errors={formik.errors.diachi}
            />

            <InputRadioFormik
              type="date"
              name="gioitinh"
              onChange={formik.handleChange}
              value={formik.values.gioitinh}
              errors={formik.errors.gioitinh}
              options={[
                { label: "Giới tính nam", value: 0 },
                { label: "Giới tính nữ", value: 1 },
              ]}
            />
          </div>

          <div className="mt-16">
            <button
              className="btn btn-primary float-right"
              // onClick={formik.handleSubmit}
            >
              Câp nhật
            </button>
          </div>
        </form>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
