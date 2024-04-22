import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import {
  validationPhone,
  validationRequired,
} from "../../../../components/yup/validationSchema";
import * as Yup from "yup";
import InputTextFormik from "../../../../components/inputFormik/InputTextFormik";
import { useFormik } from "formik";
import { FetchAddPhonebook } from "../../service/FetchAddPhonebook";
import { jwtDecode } from "jwt-decode";
import { getPhonebook } from "../../../../app/phonebookSlice";
import { FetchUpdateNameContact } from "../../service/FetchUpdateNameContact";
import { updateInfoUser_chatSlice } from "../../../../app/chatSlice";

function UpdateNameContactModalBody({ closeModal }) {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);

  const formik = useFormik({
    initialValues: {
      ten: infoRoom.name,
      madanhba: infoRoom.idPhonebook,
    },

    validationSchema: Yup.object({
      ten: validationRequired,
    }),

    onSubmit: (values) => {
      const requestAPI = dispatch(FetchUpdateNameContact(values));
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

              // cập nhật tên trong giao diện tin nhắn
              dispatch(
                updateInfoUser_chatSlice({ ...infoRoom, name: values.ten })
              );

              // load lại danh sách danh bạ
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
        labelTitle="Tên danh bạ"
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
          Cập nhật
        </button>
      </div>
    </form>
  );
}

export default UpdateNameContactModalBody;
