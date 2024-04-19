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
      <button
        onClick={openAddNewTaskModal}
        className="btn btn-outline btn-primary btn-sm  text-red-800 mx-2"
      >
        <CheckIcon className="w-5" /> Tạo công việc
      </button>

      {typeRoom === 1 && ( // nếu là nhóm
        <button
          onClick={addMemberGroup}
          className="btn btn-outline btn-primary btn-sm  text-red-800 mx-2"
        >
          <UserPlusIcon className="w-5" /> Thêm thành viên
        </button>
      )}
      <button
        onClick={openNotification}
        className="btn btn-outline btn-primary btn-sm  text-red-800 mx-2"
      >
        <Bars3Icon className="w-5" />
      </button>
    </div>
  );
};
