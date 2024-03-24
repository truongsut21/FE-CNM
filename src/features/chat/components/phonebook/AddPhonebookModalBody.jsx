import { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import InputText from "../../../../components/Input/InputText";
import ErrorText from "../../../../components/Typography/ErrorText";
import {
  validationPhone,
  validationRequired,
} from "../../../../components/yup/validationSchema";
import * as Yup from "yup";
import InputTextFormik from "../../../../components/inputFormik/InputTextFormik";
import { useFormik } from "formik";
import { HandleAPI } from "../../../../components/HandleAPI/HandleAPI";
import { FetchAddPhonebook } from "../../service/FetchAddPhonebook";
import { jwtDecode } from "jwt-decode";
import { addPhonebook, getPhonebook } from "../../../../app/phonebookSlice";

function AddPhonebookModalBody({ closeModal }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      sodienthoai: "",
      ten: "",
    },

    validationSchema: Yup.object({
      sodienthoai: validationPhone,
      ten: validationRequired,
    }),

    onSubmit: (values) => {
      console.log("values:", values);
      console.log("thêm api thêm danh bạ");

      const tokenJWT = localStorage.getItem("token");
      const id = jwtDecode(tokenJWT).id;
      const data = { ...values, chudanhba: id };

      // const dispatchAPI = dispatch(FetchAddPhonebook(data));

      // const funcSuccess = () => {
      //   dispatch(getPhonebook());
      // };

      // const funcFaill = () => {};

      // const name = "Thêm danh bạ";

      // HandleAPI({ dispatchAPI, funcSuccess, funcFaill, name });

      const requestAPI = dispatch(FetchAddPhonebook(data));
      try {
        requestAPI.then((response) => {
          if (response.payload) {
            if (response.payload.success) {
              dispatch(
                showNotification({
                  message: "Thêm danh bạ thành công",
                  status: 1,
                })
              );

              dispatch(getPhonebook());
              closeModal();
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
              showNotification({ message: "Thêm danh bạ thất bại", status: 0 })
            );
          }
        });
      } catch (error) {}
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputTextFormik
        containerStyle="mt-4"
        labelTitle="Số điện thoại"
        type="text"
        name="sodienthoai"
        onChange={formik.handleChange}
        value={formik.values.sodienthoai}
        errors={formik.errors.sodienthoai}
      />

      <InputTextFormik
        containerStyle="mt-4"
        labelTitle="Tên trong danh bạ"
        type="text"
        name="ten"
        onChange={formik.handleChange}
        value={formik.values.ten}
        errors={formik.errors.ten}
      />

      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Huỷ
        </button>
        <button type="submit" className="btn btn-primary px-6">
          Thêm
        </button>
      </div>
    </form>
  );
}

export default AddPhonebookModalBody;
