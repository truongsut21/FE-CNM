import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import {
  validationPastDay,
  validationPhone,
  validationRequired,
} from "../../../../components/yup/validationSchema";
import * as Yup from "yup";
import InputTextFormik from "../../../../components/inputFormik/InputTextFormik";
import { useFormik } from "formik";
import { FetchAddPhonebook } from "../../service/FetchAddPhonebook";
import { jwtDecode } from "jwt-decode";
import { getPhonebook } from "../../../../app/phonebookSlice";
import InputAreaFormik from "../../../../components/inputFormik/InputAreaFormik";
import { useEffect } from "react";

function AddTaskModalBody({ closeModal }) {
  const { infoRoom } = useSelector((state) => state.chatSlice);
  console.log("infoRoom:", infoRoom);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tencongviec: "",
      noidung: "",
      manguoigiaoviec: "",
      ngaygiao: "",
      thoihan: "",
      manguoinhan: "",
    },

    validationSchema: Yup.object({
      sodienthoai: validationPhone,
      ten: validationRequired,
      thoihan: validationPastDay,
    }),

    onSubmit: (values) => {
      console.log("values:", values);
      console.log("thêm api thêm danh bạ");

      const tokenJWT = localStorage.getItem("token");
      const id = jwtDecode(tokenJWT).id;
      const data = { ...values, chudanhba: id };

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

  useEffect(() => {
    formik.setFieldValue("manguoinhan", infoRoom.id);
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-2">
        <InputTextFormik
          disabled={true}
          containerStyle="mt-4"
          labelTitle="Người giao"
          type="text"
          name="sodienthoai"
          onChange={formik.handleChange}
          value={infoRoom.name}
        />

        <InputTextFormik
          disabled={true}
          containerStyle="mt-4"
          labelTitle="Người nhận"
          type="text"
          name="ten"
          onChange={formik.handleChange}
          value={infoRoom.name}
          // errors={formik.errors.ten}
        />
      </div>

      <InputTextFormik
        labelTitle="Thời hạn"
        type="date"
        name="thoihan"
        onChange={formik.handleChange}
        value={formik.values.thoihan}
        errors={formik.errors.thoihan}
      />
      <InputTextFormik
        containerStyle="mt-4"
        labelTitle="Tiêu đề"
        type="text"
        name="sodienthoai"
        onChange={formik.handleChange}
        value={""}
        errors={formik.errors.sodienthoai}
      />
      <InputAreaFormik labelTitle="Nội dung" />

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

export default AddTaskModalBody;
