import { useDispatch, useSelector } from "react-redux";
import { InfoBaseSection } from "./InfoBaseSection";
import { openModal } from "../../../common/modalSlice";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../../../utils/globalConstantUtil";
import TitleCard from "../../../../components/Cards/TitleCard";
import { TaskComponent } from "../../../common/TaskComponent";
import ManagerFeatures from "./ManagerFeatures";

function InfoRoomRightDrawer() {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);
  console.log("infoRoom:", infoRoom);
  
  const deleteContact = () => {
    dispatch(
      openModal({
        title: "Xác nhận xoá",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: `Bạn có chắc chắn muốn xoá người này khỏi danh bạ?`,
          type: CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_CONTACT,
          _id: infoRoom.id,
          _idPhonebook: infoRoom.idPhonebook,
        },
      })
    );
  };

  

  return (
    <div className="mt-4 flex flex-col">
      <InfoBaseSection />
      <ManagerFeatures />

      <div className="mb-5">
        <div className="text-rose-800 text-base font-medium leading-normal my-4">
          Danh sách công việc giao
        </div>

        <TaskComponent
          task={{
            name: "ten cong viec 1",
            description:
              "day laf mday laf mo traday laf mo traday laf mo traday laf mo traday laf mo traday laf mo trao tra",
          }}
        />
      </div>

      <button
        className="btn w-full bg-rose-50 text-rose-700 border-none hover:bg-rose-200"
        onClick={deleteContact}
      >
        Xoá liên hệ
      </button>
    </div>
  );
}

export default InfoRoomRightDrawer;
