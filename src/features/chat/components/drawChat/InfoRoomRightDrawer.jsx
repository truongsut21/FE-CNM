import { useDispatch, useSelector } from "react-redux";
import { InfoBaseSection } from "./InfoBaseSection";
import { openModal } from "../../../common/modalSlice";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../../../utils/globalConstantUtil";

function InfoRoomRightDrawer() {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);
  const deleteContact = () => {
    dispatch(
      openModal({
        title: "Xác nhận xoá",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: `Bạn có chắc chắn muốn xoá người này khỏi danh bạ?`,
          type: CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_CONTACT,
          _id: infoRoom.id,
        },
      })
    );
  };

  return (
    <div className="mt-4 flex flex-col">
      <InfoBaseSection />

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
