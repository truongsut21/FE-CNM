import { useDispatch } from "react-redux";
import {
  MODAL_BODY_TYPES,
  RIGHT_DRAWER_TYPES,
} from "../../../../utils/globalConstantUtil";
import { openRightDrawer } from "../../../common/rightDrawerSlice";
import { openModal } from "../../../common/modalSlice";
import {
  Bars3Icon,
  CheckIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { BtnPurpleBlue } from "../../../../components/Button/BtnPurpleBlue";

export const TopSideButtons = ({ typeRoom, idGroup }) => {
  const dispatch = useDispatch();

  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "Thông tin hội thoại",
        bodyType: RIGHT_DRAWER_TYPES.INFO_ROOM,
        size: "lg",
      })
    );
  };

  const openAddNewTaskModal = () => {
    dispatch(
      openModal({
        title: "Thêm mới công việc",
        bodyType: MODAL_BODY_TYPES.ADD_TASK,
      })
    );
  };

  const addMemberGroup = () => {
    dispatch(
      openModal({
        title: "Thêm thành viên vào nhóm",
        bodyType: MODAL_BODY_TYPES.ADD_MEMBER_GROUP,
        extraObject: { idGroup },
      })
    );
  };
  return (
    <div>
      <BtnPurpleBlue
        title="Tạo công việc"
        callback={openAddNewTaskModal}
        icon={<CheckIcon className="w-5 mr-2" />}
      />

      {typeRoom === 1 && ( // nếu là nhóm
        <BtnPurpleBlue
          title="Thêm thành viên"
          callback={addMemberGroup}
          icon={<UserPlusIcon className="w-5 mr-2" />}
        />
      )}

      <BtnPurpleBlue
        title=""
        callback={openNotification}
        icon={<Bars3Icon className="w-5" />}
      />
    </div>
  );
};
