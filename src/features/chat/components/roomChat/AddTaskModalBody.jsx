import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import {
  validationArrayLength1,
  validationFutureDay,
  validationRequired,
} from "../../../../components/yup/validationSchema";
import * as Yup from "yup";
import InputTextFormik from "../../../../components/inputFormik/InputTextFormik";
import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import InputAreaFormik from "../../../../components/inputFormik/InputAreaFormik";
import { useEffect, useState } from "react";
import moment from "moment";
import { FetchCreateTask } from "../../service/FetchCreateTask";
import InputSelectFomik from "../../../../components/inputFormik/InputSelectFomik";
import { token } from "../../../../app/token";
import { getListAssignTask } from "../../../../app/taskSlice";

function AddTaskModalBody({ closeModal }) {
  const { infoRoom } = useSelector((state) => state.chatSlice);
  const { listNembers } = useSelector((state) => state.groupSlice);
  const dispatch = useDispatch();

  const [optionsMemberGroup, setoptionsMemberGroup] = useState({});

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
      manguoinhan: validationArrayLength1,
    }),

    onSubmit: (values) => {
      const requestAPI = dispatch(FetchCreateTask(values));
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
              const dataSend = {
                manguoigiaoviec: token().id,
                manhom: null,
                manguoinhan: infoRoom.id,
              };

              // if (!taskAssign_taskSlice) {
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
      } catch (error) {
        console.log("lỗi ở FetchCreateTask");
      }
    },
  });

  console.log("formik công việc mới values:", formik.values);
  useEffect(() => {
    formik.setFieldValue("manguoigiaoviec", token().id);

    // nếu là cá nhân
    if (infoRoom.type === 0) {
      formik.setFieldValue("manguoinhan", [infoRoom.id]);
    }

    // nếu là nhóm
    else {
      const option = listNembers.map((item) => ({
        label: item.ten,
        value: item.mataikhoan,
      }));
      setoptionsMemberGroup(option);
    }
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

        {infoRoom.type === 0 && ( // nếu là cá nhân
          <InputTextFormik
            disabled={true}
            containerStyle="mt-4"
            labelTitle="Người nhận"
            type="text"
            name="ten"
            onChange={formik.handleChange}
            value={infoRoom.name}
          />
        )}
      </div>

      {infoRoom.type === 1 && ( // nếu là nhóm
        <InputSelectFomik
          labelTitle="Người nhận"
          options={optionsMemberGroup}
          formik={formik}
          updateType="manguoinhan"
          value={formik.values.manguoinhan}
          errors={formik.errors.manguoinhan}
        />
      )}

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
