import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import {
  validationFutureDay,
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
import moment from "moment";
import { FetchCreateTask } from "../../service/FetchCreateTask";

function AddTaskModalBody({ closeModal }) {
  const { infoRoom } = useSelector((state) => state.chatSlice);
  console.log("infoRoom:", infoRoom);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tencongviec: "",
      noidung: "",
      manguoigiaoviec: "",
      ngaygiao: moment().format("YYYY-MM-DD"),
      thoihan: "",
      manguoinhan: "",
      maloaitrangthaicongviec: 1,
    },

    validationSchema: Yup.object({
      tencongviec: validationRequired,
      noidung: validationRequired,
      thoihan: validationFutureDay,
    }),

    onSubmit: (values) => {
      console.log("values thêm công việc:", values);

      const data = { ...values, manguoinhan: [values.manguoinhan] };

      const requestAPI = dispatch(FetchCreateTask(data));
      try {
        requestAPI.then((response) => {
          if (response.payload) {
            if (response.payload.success) {
              dispatch(
                showNotification({
                  message: response.payload.message,
                  status: 1,
                })
              );


              // thay vào đây là get danh sach cong viẹc
              // dispatch(getPhonebook());
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
              showNotification({ message: "Tạo công việc thất bại", status: 0 })
            );
          }
        });
      } catch (error) {}
    },
  });

  console.log("formik công việc mới values:", formik.values);
  useEffect(() => {
    formik.setFieldValue("manguoinhan", infoRoom.id);

    const tokenJWT = localStorage.getItem("token");
    const id = jwtDecode(tokenJWT).id;
    formik.setFieldValue("manguoigiaoviec", id);
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
        name="tencongviec"
        onChange={formik.handleChange}
        value={formik.values.tencongviec}
        errors={formik.errors.tencongviec}
      />
      <InputAreaFormik
        labelTitle="Nội dung"
        type="text"
        name="noidung"
        onChange={formik.handleChange}
        value={formik.values.noidung}
        errors={formik.errors.noidung}
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

export default AddTaskModalBody;
