import React, { useEffect, useRef, useState } from "react";
import TitleCard from "../../../../components/Cards/TitleCard";
import { ChatReci } from "./ChatReci";
import { ChatSend } from "./ChatSend";
import { useDispatch, useSelector } from "react-redux";

import { token } from "../../../../app/token";
import moment from "moment";
import { FetchSendMessagePN } from "../../service/FetchSendMessagePN";

import { io } from "socket.io-client";
import { updateMessage_chatSlice } from "../../../../app/chatSlice";
import { showNotification } from "../../../common/headerSlice";
import { TopSideButtons } from "./TopSideButtons";
import { FetchSendMessageGR } from "../../service/FetchSendMessageGR";
import { BtnCyanBlue } from "../../../../components/Button/BtnCyanBlue";
import { getPhonebook } from "../../../../app/phonebookSlice";

export const CardChat = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const socketRef = useRef();

  const { message_chatSlice } = useSelector((state) => state.chatSlice);
  const { infoRoom } = useSelector((state) => state.chatSlice);

  const [messageValue, setmessageValue] = useState("");

  const idLogin = token().id;
  const nameLogin = token().lastname;

  useEffect(() => {
    socketRef.current = io("http://ontask.io.vn:3003");

    // nếu là cá nhân
    if (infoRoom.type === 0) {
      // Gửi sự kiện 'setUserId' với userId mới
      socketRef.current.emit("setUserId", idLogin);
    } else {
      socketRef.current.emit("setUserId", infoRoom.id);
    }

    // Xử lý dữ liệu nhận được từ máy chủ
    socketRef.current.on("message", (data) => {
      console.log("data message:", data);
      dispatch(showNotification({ message: "Có tin nhắn mới", status: 1 }));

      dispatch(getPhonebook())

      // kiểm tra người gửi, nếu đang ở trong room tin nhắn người gửi thì render ra
      if (data.manguoigui === infoRoom.id || data.manhomnhan === infoRoom.id) {
        console.log("đã nhảy vô hàm cập nhật tin nhắn");
        const tempmessage_chatSlice = message_chatSlice.concat(data);
        dispatch(updateMessage_chatSlice(tempmessage_chatSlice));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [infoRoom.id, message_chatSlice]);

  // end soket

  const handleSubmitMessage = () => {
    const dataSend = {
      manguoigui: idLogin,
      manguoinhan: infoRoom.id,
      manhomnhan: infoRoom.id,
      noidung: messageValue,
      thoigiangui: moment().format("YYYY-MM-DD HH:mm:ss"),
      receiverId: infoRoom.id,
    };

    console.log("dataSend handleSubmitMessage:", dataSend);

    // gửi data tin nhắn vô socket
    socketRef.current.emit("sendMessage", dataSend);

    // Sau khi đã gửi tin nhắn, cập nhật messageValue thành chuỗi rỗng
    setmessageValue("");

    // nếu là tin nhắn cá nhân
    if (infoRoom.type === 0) {
      dispatch(FetchSendMessagePN(dataSend));
    }
    // nếu là tin nhăn nhóm
    else {
      dispatch(FetchSendMessageGR(dataSend));
    }
    // cập nhật tin nhắn gửi
    const tempmessage_chatSlice = message_chatSlice.concat(dataSend);
    dispatch(updateMessage_chatSlice(tempmessage_chatSlice));
  };

  const handleKeyPress = (e) => {
    // Kiểm tra nếu phím được bấm là Enter
    if (e.key === "Enter") {
      // Gọi sự kiện của button
      handleSubmitMessage();
    }
  };

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
          TopSideButtons={
            <TopSideButtons typeRoom={infoRoom.type} idGroup={infoRoom.id} />
          }
        >
          <div className="h-[65vh] flex flex-col-reverse">
            <div className="sticky top-0 mt-4">
              <div className="relative">
                <input
                  value={messageValue}
                  onChange={(e) => setmessageValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
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
                    if (item.manguoigui === idLogin) {
                      return (
                        <ChatSend
                          content={item.noidung}
                          id={item.manguoigui}
                          name={nameLogin}
                          key={index}
                          time={item.thoigiangui}
                        />
                      );
                    } else {
                      return (
                        <ChatReci
                          content={item.noidung}
                          id={item.manguoigui}
                          key={index}
                          name={infoRoom.name}
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
          <div className="flex h-[65vh]">
            <img
              className="h-full max-w-full m-auto"
              src="https://cdn.dribbble.com/users/1520241/screenshots/9574747/empty-illustration_1.gif"
              alt=""
            />
          </div>
        </TitleCard>
      )}
    </div>
  );
};
