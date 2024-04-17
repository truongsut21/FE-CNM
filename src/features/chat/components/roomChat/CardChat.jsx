import React, { useEffect, useRef, useState } from "react";
import TitleCard from "../../../../components/Cards/TitleCard";
import { Bars3Icon, CheckIcon } from "@heroicons/react/24/solid";
import { ChatReci } from "./ChatReci";
import { ChatSend } from "./ChatSend";
import { useDispatch, useSelector } from "react-redux";
import { openRightDrawer } from "../../../common/rightDrawerSlice";
import {
  MODAL_BODY_TYPES,
  RIGHT_DRAWER_TYPES,
} from "../../../../utils/globalConstantUtil";
import { openModal } from "../../../common/modalSlice";
import { token } from "../../../../app/token";
import moment from "moment";
import { FetchSendMessagePN } from "../../service/FetchSendMessagePN";

import socket from "./socket.io"; // Đường dẫn tới module socket
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import {
  getMessagePN,
  updateMessage_chatSlice,
} from "../../../../app/chatSlice";

const TopSideButtons = () => {
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
  return (
    <div>
      <button
        onClick={openAddNewTaskModal}
        className="btn btn-outline btn-primary btn-sm  text-red-800 mx-2"
      >
        <CheckIcon className="w-5" /> Tạo công việc
      </button>
      <button
        onClick={openNotification}
        className="btn btn-outline btn-primary btn-sm  text-red-800 mx-2"
      >
        <Bars3Icon className="w-5" />
      </button>
    </div>
  );
};

export const CardChat = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const { infoRoom } = useSelector((state) => state.chatSlice);
  const { message_chatSlice } = useSelector((state) => state.chatSlice);

  const [messageValue, setmessageValue] = useState("");

  const idLogin = token().id;
  const nameLogin = token().lastname;

  // start socket
  const [socket, setSocket] = useState(null);
  const [userId, setUserId] = useState(null);

  const tokenJWT = localStorage.getItem("token");
  const id = jwtDecode(tokenJWT).id;
  useEffect(() => {
    const newSocket = io("http://localhost:3003");
    setSocket(newSocket);

    // Tạo một userId ngẫu nhiên
    const newUserId = id;
    setUserId(newUserId);

    // Gửi sự kiện 'setUserId' với userId mới
    newSocket.emit("setUserId", newUserId);

    return () => {
      newSocket.close();
    };
  }, []);

  // end soket

  const handleSubmitMessage = () => {
    const dataSend = {
      manguoigui: idLogin,
      manguoinhan: infoRoom.id,
      noidung: messageValue,
      thoigiangui: moment().format("YYYY-MM-DD HH:mm:ss"),
      receiverId: infoRoom.id,
    };

    console.log("dataSend handleSubmitMessage:", dataSend);

    // gửi data tin nhắn vô socket
    socket.emit("sendMessage", dataSend);
    // Sau khi đã gửi tin nhắn, cập nhật messageValue thành chuỗi rỗng
    setmessageValue("");
    dispatch(FetchSendMessagePN(dataSend));

    // cập nhật tin nhắn gửi
    const tempmessage_chatSlice = message_chatSlice.concat(dataSend);
    dispatch(updateMessage_chatSlice(tempmessage_chatSlice));
  };

  // hàm nhận tin nhắn từ socket
  useEffect(() => {
    if (socket) {
      // Lắng nghe sự kiện 'message' từ máy chủ
      socket.on("message", (data) => {
        console.log("Received message:", data);
        // Xử lý dữ liệu nhận được từ máy chủ

        // cập nhật tin nhắn nhận
        const tempmessage_chatSlice = message_chatSlice.concat(data);
        dispatch(updateMessage_chatSlice(tempmessage_chatSlice));
      });
    }
  }, [dispatch, message_chatSlice, socket]);

  // // xử lý lăn cuộn xuống dưới cùng
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [message_chatSlice]);

  return (
    <div className="col-span-3">
      {infoRoom.id ? (
        <TitleCard
          title={infoRoom.name}
          topMargin="mt-2"
          TopSideButtons={<TopSideButtons />}
        >
          <div className="h-[37rem] flex flex-col-reverse">
            <div className="sticky top-0 mt-4">
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  value={messageValue}
                  onChange={(e) => setmessageValue(e.target.value)}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Nhập tin nhắn..."
                  required
                />
                <button
                  onClick={handleSubmitMessage}
                  className="flex items-center text-white absolute end-2.5 bottom-2.5 bg-custom-primary hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Gửi
                </button>
              </div>
            </div>
            <div className=" overflow-y-auto " ref={containerRef}>
              {message_chatSlice.length > 0
                ? message_chatSlice.map((item, index) => {
                    if (item.manguoinhan === idLogin) {
                      return (
                        <ChatReci
                          content={item.noidung}
                          id={item.manguoigui}
                          key={index}
                          name={infoRoom.name}
                          time={item.thoigiangui}
                        />
                      );
                    } else {
                      return (
                        <ChatSend
                          content={item.noidung}
                          id={item.manguoigui}
                          name={nameLogin}
                          key={index}
                          time={item.thoigiangui}
                        />
                      );
                    }
                  })
                : "Bạn chưa có tin nhắn nào"}
            </div>
          </div>
        </TitleCard>
      ) : (
        <TitleCard title="" topMargin="mt-2">
          <div className="h-[38rem] flex">
            <img
              className="m-auto"
              src="https://cdn.dribbble.com/users/1520241/screenshots/9574747/empty-illustration_1.gif"
              alt=""
            />
          </div>
        </TitleCard>
      )}
    </div>
  );
};
