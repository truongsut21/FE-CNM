import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInfoUser_chatSlice } from "../../../../app/chatSlice";

export default function AvataUser({ name, avata, mess, id, type, idPhonebook }) {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);

  const handeActiveChat = () => {
    dispatch(updateInfoUser_chatSlice({ id, name, type, idPhonebook }));
  };

  return (
    <div
      onClick={handeActiveChat}
      className={`flex p-2 items-center gap-4 mt-2 rounded-md hover:bg-base-300 cursor-pointer ${id === infoRoom.id ? "bg-base-300" : ""
        }`}
    >
      <img className="w-10 h-10 rounded-full" src={avata} alt="" />
      <div className="font-medium dark:text-white">
        <div>{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{mess}</div>
      </div>
    </div>
  );
}
