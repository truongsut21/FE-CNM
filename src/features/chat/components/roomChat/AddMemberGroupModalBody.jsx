import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../../common/headerSlice";
import { validationArrayLength1 } from "../../../../components/yup/validationSchema";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import InputSelectFomik from "../../../../components/inputFormik/InputSelectFomik";
import { getAllMembersInGroup, getListGroup } from "../../../../app/groupSlice";
import { FetchAddMemberGroup } from "../../service/FetchAddMemberGroup";

function AddMemberGroupModalBody({ closeModal, extraObject }) {
  const dispatch = useDispatch();
  const { listPhonebook } = useSelector((state) => state.phonebookSlice);
  const { listNembers } = useSelector((state) => state.groupSlice);

  const [colourOptions, setcolourOptions] = useState([
    { labbel: "", value: 0 },
  ]);

  const formik = useFormik({
    initialValues: {
      manhom: extraObject.idGroup,
      mataikhoan: [],
    },

    validationSchema: Yup.object({
      mataikhoan: validationArrayLength1,
    }),

    onSubmit: (values) => {
      console.log("values thêm thành viên nhóm:", values);

      const data = values;

      const requestAPI = dispatch(FetchAddMemberGroup(data));
      try {
        requestAPI.then((response) => {
          if (response.payload) {
            if (response.payload.success) {
              dispatch(
                showNotification({
                  message: "Thêm thành viên thành công",
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
              showNotification({
                message: "Thêm thành viên thất bại",
                status: 0,
              })
            );
          }
        });
      } catch (error) {}
    },
  });

  useEffect(() => {
    dispatch(getAllMembersInGroup(extraObject.idGroup));
  }, []);

  useEffect(() => {
    // lấy ra danh danh thành viên trong danh bạn mà không có trong nhóm
    const option = listPhonebook
      .filter((item1) => {
        return !listNembers.some(
          (item2) => item2.mataikhoan === item1.manguoitrongdanhba
        );
      })
      .map((item) => ({ label: item.ten, value: item.manguoitrongdanhba }));

    setcolourOptions(option);
  }, [listNembers]);

  return (
    <div className="h-auto relative">
      <form onSubmit={formik.handleSubmit}>
        <div className="h-52">
          <InputSelectFomik
            labelTitle="Thành viên"
            options={colourOptions}
            formik={formik}
            updateType="mataikhoan"
            value={formik.values.mataikhoan}
            errors={formik.errors.mataikhoan}
          />
        </div>

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

export default AddMemberGroupModalBody;
