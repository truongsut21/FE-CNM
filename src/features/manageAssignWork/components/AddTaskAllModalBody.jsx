import { useFormik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  validationArrayLength1,
  validationFutureDay,
  validationRequired,
} from "../../../components/yup/validationSchema";
import { token } from "../../../app/token";
import { getListAssignTask } from "../../../app/taskSlice";
import { showNotification } from "../../common/headerSlice";
import { FetchCreateTask } from "../../chat/service/FetchCreateTask";
import InputTextFormik from "../../../components/inputFormik/InputTextFormik";
import InputSelectFomik from "../../../components/inputFormik/InputSelectFomik";
import InputAreaFormik from "../../../components/inputFormik/InputAreaFormik";
import { getPhonebook } from "../../../app/phonebookSlice";
import { getListGroup } from "../../../app/groupSlice";

function AddTaskAllModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const { listGroup } = useSelector((state) => state.groupSlice);
  const { listPhonebook } = useSelector((state) => state.phonebookSlice);

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

              dispatch(getListAssignTask(values));

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

  useEffect(() => {
    const optionGroup = listGroup.map((item) => ({
      label: "👨‍👩‍👧" + item.tennhom,
      value: item.manhom,
    }));

    const optionPhonebook = listPhonebook.map((item) => ({
      label: item.ten,
      value: item.manguoitrongdanhba,
    }));

    console.log("options: ", [...optionPhonebook, ...optionGroup]);

    setoptionsMemberGroup([...optionPhonebook, ...optionGroup]);
  }, [listGroup, listPhonebook]);

  useEffect(() => {
    dispatch(getPhonebook());
    dispatch(getListGroup());
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
          value={token().fisrtname +" "+ token().lastname}
        />
      </div>

      <InputSelectFomik
        labelTitle="Người nhận"
        options={optionsMemberGroup}
        formik={formik}
        updateType="manguoinhan"
        value={formik.values.manguoinhan}
        errors={formik.errors.manguoinhan}
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

export default AddTaskAllModalBody;
