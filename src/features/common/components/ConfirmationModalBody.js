import { useDispatch } from "react-redux";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
} from "../../../utils/globalConstantUtil";
import { deleteLead } from "../../leads/leadSlice";
import { showNotification } from "../headerSlice";
import { FetchDeleteContact } from "../../chat/service/FetchDeleteContact";
import { getPhonebook } from "../../../app/phonebookSlice";

function ConfirmationModalBody({ extraObject, closeModal }) {
  const dispatch = useDispatch();

  const { message, type, _id, index } = extraObject;

  const proceedWithYes = async () => {
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE) {
      // positive response, call api or dispatch redux function
      dispatch(deleteLead({ index }));
      dispatch(showNotification({ message: "Lead Deleted!", status: 1 }));
    }


    // hàm xử lý xoá thông tin liên lạc
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_CONTACT) {
      // positive response, call api or dispatch redux function
      const resAPI = dispatch(FetchDeleteContact(_id));
      resAPI
        .then((result) => {
          console.log("result:", result);
          if (result.payload.success) {
            
            closeModal();
            dispatch(getPhonebook());
            dispatch(
              showNotification({ message: result.payload.message, status: 1 })
            );
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
