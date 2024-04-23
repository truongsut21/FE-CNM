import { useEffect } from "react";
import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";
import AddPhonebookModalBody from "../features/chat/components/contactSection/AddPhonebookModalBody";
import CreategroupModalBody from "../features/chat/components/contactSection/CreategroupModalBody";
import AddTaskModalBody from "../features/chat/components/roomChat/AddTaskModalBody";
import AddMemberGroupModalBody from "../features/chat/components/roomChat/AddMemberGroupModalBody";
import UpdateNameContactModalBody from "../features/chat/components/drawChat/UpdateNameContactModalBody";
import DetailsTaskAssignModalBody from "../features/common/DetailsTaskAssignModalBody";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const close = (e) => {
    dispatch(closeModal(e));
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => close()}
          >
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

          {/* Loading modal body according to different modal type */}
          {
            {
              [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
                <AddLeadModalBody
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.ADD_PHONEBOOK]: (
                <AddPhonebookModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.ADD_TASK]: (
                <AddTaskModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.CREATE_GROUP]: (
                <CreategroupModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.ADD_MEMBER_GROUP]: (
                <AddMemberGroupModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.UPDATE_NAME_CONTACT]: (
                <UpdateNameContactModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ), [MODAL_BODY_TYPES.DETAILS_TASK_ASSIGN]: (
                <DetailsTaskAssignModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),

              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
