import { useEffect, useRef } from "react";
import { token } from "../app/token";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { updateMessage_chatSlice } from "../app/chatSlice";

const SocketChat = () => {
  const socketRef = useRef();
  const idLogin = token().id;
  const dispatch = useDispatch();
  const { message_chatSlice } = useSelector((state) => state.chatSlice);
  const { infoRoom } = useSelector((state) => state.chatSlice);

  useEffect(() => {
    socketRef.current = io("http://ontask.io.vn:3003");
    // Gửi sự kiện 'setUserId' với userId mới
    socketRef.current.emit("setUserId", idLogin);

    // Xử lý dữ liệu nhận được từ máy chủ
    socketRef.current.on("message", (data) => {
      console.log("Received message:", data);

      // cập nhật tin nhắn nhận
      console.log("infoRoom.id:", infoRoom.id);
      console.log("data.manguoigui:", data.manguoigui);

      // kiểm tra người gửi, nếu đúng render ra
      if (data.manguoigui === infoRoom.id) {
        console.log("đã nhảy vô hàm cập nhật tin nhắn");
        const tempmessage_chatSlice = message_chatSlice.concat(data);
        dispatch(updateMessage_chatSlice(tempmessage_chatSlice));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [infoRoom.id, message_chatSlice]);
};

export default SocketChat;
