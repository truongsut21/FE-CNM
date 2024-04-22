import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import {
  validationArrayLength2,
  validationPhone,
  validationRequired,
} from "../../../../components/yup/validationSchema";
import * as Yup from "yup";
import InputTextFormik from "../../../../components/inputFormik/InputTextFormik";
import { useFormik } from "formik";
import { FetchAddPhonebook } from "../../service/FetchAddPhonebook";
import { jwtDecode } from "jwt-decode";
import { getPhonebook } from "../../../../app/phonebookSlice";
import { useEffect, useState } from "react";
import InputSelectFomik from "../../../../components/inputFormik/InputSelectFomik";
import { FetchCreateGroup } from "../../service/FetchCreateGroup";
import { getListGroup, getListMemberGroup } from "../../../../app/groupSlice";

function CreategroupModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const { listPhonebook } = useSelector((state) => state.phonebookSlice);
  const [colourOptions, setcolourOptions] = useState([
    { labbel: "", value: 0 },
  ]);

  const formik = useFormik({
    initialValues: {
      tennhom: "",
      matruongnhom: "",
      mataikhoan: [],
    },

    validationSchema: Yup.object({
      tennhom: validationRequired,
      mataikhoan: validationArrayLength2,
    }),

    onSubmit: (values) => {
      console.log("values tạo nhóm:", values);

      const tokenJWT = localStorage.getItem("token");
      const id = jwtDecode(tokenJWT).id;
      const data = { ...values, matruongnhom: id };

      const requestAPI = dispatch(FetchCreateGroup(data));
      try {
        requestAPI.then((response) => {
          if (response.payload) {
            if (response.payload.success) {
              dispatch(
                showNotification({
                  message: "Tạo nhóm thành công",
                  status: 1,
                })
              );

              dispatch(getListGroup());
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
              showNotification({ message: "Tạo nhóm thất bại", status: 0 })
            );
          }
        });
      } catch (error) {}
    },
  });

  useEffect(() => {
    const option = listPhonebook.map((item) => {
      return { label: item.ten, value: item.manguoitrongdanhba };
    });
    setcolourOptions(option);
  }, []);

  return (
    <div className="h-80">
      <form onSubmit={formik.handleSubmit}>
        <InputTextFormik
          containerStyle="mt-4"
          labelTitle="Tên nhóm"
          type="text"
          name="tennhom"
          onChange={formik.handleChange}
          value={formik.values.tennhom}
          errors={formik.errors.tennhom}
        />

        <InputSelectFomik
          labelTitle="Thành viên"
          options={colourOptions}
          formik={formik}
          updateType="mataikhoan"
          value={formik.values.mataikhoan}
          errors={formik.errors.mataikhoan}
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
    </div>
  );
}

export default CreategroupModalBody;
