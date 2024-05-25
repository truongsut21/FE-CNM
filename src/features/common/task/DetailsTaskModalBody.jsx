import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { useFormik } from "formik";
import moment from "moment";
import { validationRequired } from "../../../components/yup/validationSchema";
import InputTextFormik from "../../../components/inputFormik/InputTextFormik";
import InputAreaFormik from "../../../components/inputFormik/InputAreaFormik";
import { token } from "../../../app/token";
import { FetchUpdateTask } from "../service/FetchUpdateTask";
import { showNotification } from "../headerSlice";
import { getListAssignTask } from "../../../app/taskSlice";

function DetailsTaskModalBody({ closeModal, extraObject }) {
  console.log("extraObject:", extraObject);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      macongviec: extraObject.macongviec,
      tencongviec: extraObject.tencongviec,
      noidung: extraObject.noidung,
      manguoigiaoviec: extraObject.manguoigiaoviec,
      ngaygiao: moment(extraObject.ngaygiao).format("YYYY-MM-DD"),
      thoihan: moment(extraObject.thoihan).format("YYYY-MM-DD"),
      manguoinhan: extraObject.manguoinhan,
      maloaitrangthaicongviec: extraObject.maloaitrangthaicongviec,
      tennguoigiao: extraObject.tennguoigiao,
    },

    validationSchema: Yup.object({
      tencongviec: validationRequired,
      noidung: validationRequired,
      // thoihan: validationFutureDay,
    }),

    onSubmit: (values) => {
      const data = { ...values };

      const requestAPI = dispatch(FetchUpdateTask(data));
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

              const dataSend = {
                manguoigiaoviec: token().id,
                manhom: null,
                manguoinhan: null,
              };

              dispatch(getListAssignTask(dataSend));
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
          value={extraObject.tennguoigiao}
        />

        <InputTextFormik
          disabled={true}
          containerStyle="mt-4"
          labelTitle="Người nhận"
          type="text"
          name="ten"
          onChange={formik.handleChange}
          value={extraObject.tennguoinhan}
          // errors={formik.errors.ten}
        />
      </div>

      <InputTextFormik
        labelTitle="Ngày giao"
        type="date"
        name="ngaygiao"
        onChange={formik.handleChange}
        value={formik.values.ngaygiao}
        errors={formik.errors.ngaygiao}
      />

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
        <button
          className="btn btn-outline btn-error"
          onClick={() => closeModal()}
        >
          Huỷ
        </button>
        {extraObject.typeTask === "taskAssign" ? (
          <button type="submit" className="btn btn-primary px-6">
            Cập nhật
          </button>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default DetailsTaskModalBody;
