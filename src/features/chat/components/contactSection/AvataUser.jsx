import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessageGR,
  getMessagePN,
  updateInfoUser_chatSlice,
} from "../../../../app/chatSlice";
import { jwtDecode } from "jwt-decode";
import { getAllMembersInGroup, getListGroup } from "../../../../app/groupSlice";
import { FetchUpdateNotiMessage } from "../../service/FetchUpdateNotiMessage";
import { getPhonebook } from "../../../../app/phonebookSlice";

export default function AvataUser({
  name,
  avata,
  mess,
  id,
  type,
  idPhonebook,
  leader,
  countMess,
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
        manhomnhan: null,
      };
      dispatch(getMessagePN(dataSend));
      dispatch(FetchUpdateNotiMessage(dataSend));
      dispatch(getPhonebook());

    }

    // xử lý tin nhắn nhóm, gọi thanh viên nhóm
    if (type === 1) {
      const dataSend = {
        manhomnhan: id,
        manguoigui: id_login,
        manguoinhan: null,
      };
      dispatch(getMessageGR(dataSend));
      dispatch(getAllMembersInGroup(infoRoom.id));
      dispatch(FetchUpdateNotiMessage(dataSend));
      dispatch(getListGroup());
    }
  };

  return (
    <div
      onClick={handeActiveChat}
      className={`flex justify-between p-2 items-center gap-4 mt-2 rounded-md hover:bg-base-300 cursor-pointer ${
        id === infoRoom.id ? "bg-base-300" : ""
      }`}
    >
      <div className="flex">
        <img className="w-10 h-10 rounded-full" src={avata} alt="" />
        <div className="font-medium dark:text-white ml-2">
          <div>{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{mess}</div>
        </div>
      </div>

      {((countMess !== 0) && (countMess !== null)) ? (
        <div className="badge badge-error text-white">{countMess}</div>
      ) : (
        ''
      )}
    </div>
  );
}
