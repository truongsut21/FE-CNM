import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessagePN,
  updateInfoUser_chatSlice,
} from "../../../../app/chatSlice";
import { jwtDecode } from "jwt-decode";
import { getAllMembersInGroup } from "../../../../app/groupSlice";

export default function AvataUser({
  name,
  avata,
  mess,
  id,
  type,
  idPhonebook,
  leader,
}) {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);

  const handeActiveChat = () => {
    const tokenJWT = localStorage.getItem("token");
    const id_login = jwtDecode(tokenJWT).id;

    dispatch(updateInfoUser_chatSlice({ id, name, type, idPhonebook, leader }));

    // sử lý tin nhắn cá nhân
    if (type === 0) {
      const dataSend = {
        manguoigui: id_login,
        manguoinhan: id,
      };
      dispatch(getMessagePN(dataSend));
    }

    // xử lý tin nhắn nhóm, gọi thanh viên nhóm
    if (type === 1) {
      const dataSend = {
        manhomnhan: id,
      };
      dispatch(getMessagePN(dataSend));
      dispatch(getAllMembersInGroup(infoRoom.id));
    }
  };

  return (
    <div
      onClick={handeActiveChat}
      className={`flex p-2 items-center gap-4 mt-2 rounded-md hover:bg-base-300 cursor-pointer ${
        id === infoRoom.id ? "bg-base-300" : ""
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
