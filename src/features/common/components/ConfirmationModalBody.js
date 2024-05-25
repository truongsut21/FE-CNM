import { useDispatch } from "react-redux";

import { deleteLead } from "../../leads/leadSlice";
import { showNotification } from "../headerSlice";
import { FetchDeleteMemberGroup } from "../../chat/service/FetchDeleteMemberGroup";
import { getAllMembersInGroup } from "../../../app/groupSlice";
import { CONFIRMATION_MODAL_CLOSE_TYPES } from "../../../utils/globalConstantUtil";
import { FetchDeleteTask } from "../task/services/FetchDeleteTask";
import { FetchUpdateStatusTask } from "../task/services/FetchUpdateStatusTask";
import { token } from "../../../app/token";
import { getListAssignTask, getListTaskReceived } from "../../../app/taskSlice";

function ConfirmationModalBody({ extraObject, closeModal }) {
  const dispatch = useDispatch();

  const { message, type, _id, index, _idPhonebook, _idGroup, _idMember, _idTask , typeTask} = extraObject;

  const proceedWithYes = async () => {
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE) {
      // positive response, call api or dispatch redux function
      dispatch(deleteLead({ index }));
      dispatch(showNotification({ message: "Lead Deleted!", status: 1 }));
    }


    // hàm xử lý xoá thông tin liên lạc
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_CONTACT) {
      // positive response, call api or dispatch redux function
      const resAPI = dispatch(FetchUpdateStatusTask(_idPhonebook));
      resAPI
        .then((result) => {
          console.log("result:", result);
          if (result.payload.success) {

            // closeModal();
            // dispatch(getPhonebook());
            dispatch(
              showNotification({ message: result.payload.message, status: 1 })
            );

            setTimeout(() => { window.location.reload() }, 500);
          } else {
            dispatch(
              showNotification({ message: result.payload.message, status: 0 })
            );
          }
        })
        .catch((error) => {
          dispatch(showNotification({ message: "Xoá thất bại", status: 0 }));
          console.error("Lỗi FetchDeleteContact:", error);
        });
    }

    // hàm xử lý xoá công việc
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_TASK) {
      // positive response, call api or dispatch redux function
      const resAPI = dispatch(FetchDeleteTask(_idTask));

      resAPI
        .then((result) => {
          console.log("result:", result);
          if (result.payload.success) {

            closeModal();
            // dispatch(getPhonebook());
            dispatch(
              showNotification({ message: result.payload.message, status: 1 })
            );

            if (typeTask === "taskAssign") {
              // gọi danh sách công việc giao
              const dataSend = {
                manguoigiaoviec: token().id,
                manhom: null,
                manguoinhan: null,
              };

              dispatch(getListAssignTask(dataSend));
            } else {
              // gọi lại danh sách công việc nhận
              const dataSend = {
                manguoigiaoviec: null,
                manhom: null,
                manguoinhan: token().id,
              };

              dispatch(getListTaskReceived(dataSend));
            }

          } else {
            dispatch(
              showNotification({ message: result.payload.message, status: 0 })
            );
          }
        })
        .catch((error) => {
          dispatch(showNotification({ message: "Xoá thất bại", status: 0 }));
          console.error("Lỗi FetchDeleteContact:", error);
        });
    }

    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_MEMBER_GROUP) {

      const resAPI = dispatch(FetchDeleteMemberGroup({
        _idGroup, _idMember
      }));

      resAPI
        .then((result) => {
          console.log("result:", result);
          if (result.payload.success) {

            closeModal();
            dispatch(
              showNotification({ message: result.payload.message, status: 1 })
            );
            dispatch(getAllMembersInGroup(_idGroup));
          } else {
            dispatch(
              showNotification({ message: result.payload.message, status: 0 })
            );
          }
        })
        .catch((error) => {
          dispatch(showNotification({ message: "Xoá thất bại", status: 0 }));
          console.error("Lỗi FetchDeleteContact:", error);
        });
    }
  };

  return (
    <>
      <p className=" text-xl mt-8 text-center">{message}</p>

      <div className="modal-action mt-12">
        <button className="btn bg-gray-100" onClick={() => closeModal()}>
          Huỷ
        </button>

        <button
          className="btn bg-rose-50 text-rose-700 border-none hover:bg-rose-200 w-36"
          onClick={() => proceedWithYes()}
        >
          Xác nhận
        </button>
      </div>
    </>
  );
}

export default ConfirmationModalBody;
