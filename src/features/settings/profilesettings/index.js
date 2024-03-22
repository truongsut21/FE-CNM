import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import InputText from "../../../components/Input/InputText";
import InputRadio from "../../../components/Input/InputRadio";
import { getInfoUser } from "../../../app/userSlice";

function ProfileSettings() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userState, setUserState] = useState(user);

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log("{ updateType, value }:", { updateType, value });
    setUserState({ ...userState, [updateType]: value });
  };

  useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  return (
    <>
      <TitleCard title="Thông tin người dùng" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Họ đệm"
            defaultValue={userState.hodem}
            updateType="hodem"
            updateFormValue={updateFormValue}
          />

          <InputText
            labelTitle="Tên"
            updateType="ten"
            defaultValue={userState.ten}
            updateFormValue={updateFormValue}
          />

          <InputText
            disabled={true}
            labelTitle="Số điện thoại"
            defaultValue={userState.sodienthoai}
            updateType="sodienthoai"
            updateFormValue={updateFormValue}
          />

          <InputText
            labelTitle="Email"
            defaultValue={userState.email}
            updateType="email"
            updateFormValue={updateFormValue}
          />

          <InputText
            labelTitle="Địa chỉ"
            defaultValue={userState.diachi}
            updateType="diachi"
            updateFormValue={updateFormValue}
          />

          <InputText
            labelTitle="Ngày sinh"
            type="date"
            defaultValue={moment(userState.ngaysinh).format("YYYY-MM-DD")}
            updateType="NgaySinh"
            updateFormValue={updateFormValue}
          />

          <InputRadio
            defaultValue={userState.gioitinh}
            updateType="gioitinh"
            updateFormValue={updateFormValue}
            options={[
              { label: "Giới tính nam", value: 0 },
              { label: "Giới tính nữ", value: 1 },
            ]}
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Câp nhật
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
