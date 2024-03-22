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
      console.log("thêm api thêm danh bạ")
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
        <button type="submit" className="btn btn-primary px-6">Thêm</button>
      </div>
    </form>
  );
}

export default AddPhonebookModalBody;
