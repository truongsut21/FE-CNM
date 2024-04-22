import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilIcon } from "@heroicons/react/24/outline";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";
export const InfoBaseSection = () => {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);
  const openUpdateNameContactModal = () => {
    dispatch(
      openModal({
        title: "Chỉnh sửa tên danh bạ",
        bodyType: MODAL_BODY_TYPES.UPDATE_NAME_CONTACT,
      })
    );
  };
  return (
    <div className="m-auto">
      <img
        className="w-20 rounded-full"
        src={`https://avatar.iran.liara.run/public/${infoRoom.id}`}
        alt=""
      />
      <p className="font-bold text-xl text-center">
        {infoRoom.name}{" "}
        <button onClick={openUpdateNameContactModal}>
          <PencilIcon className="ml-2 w-4" />
        </button>
      </p>
    </div>
  );
};
