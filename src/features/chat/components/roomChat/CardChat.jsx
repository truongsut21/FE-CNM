import React from "react";
import TitleCard from "../../../../components/Cards/TitleCard";
import {
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { ChatReci } from "./ChatReci";
import { ChatSend } from "./ChatSend";
import { useDispatch, useSelector } from "react-redux";
import { openRightDrawer } from "../../../common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../../../../utils/globalConstantUtil";

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
  return (
    <button
      onClick={openNotification}
      className="btn btn-outline btn-primary btn-sm  text-red-800"
    >
      <Bars3Icon className="w-5" />
    </button>
  );
};
export const CardChat = () => {
  const { infoRoom } = useSelector((state) => state.chatSlice);
  return (
    <div className="col-span-3">
      <TitleCard
        title={infoRoom.name}
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        <div className="h-[37rem] flex flex-col-reverse">
          <form className="sticky top-0 mt-4">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <ChatBubbleBottomCenterTextIcon className="w-5 text-primary" />
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập tin nhắn..."
                required
              />
              <button
                type="submit"
                className="flex items-center text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 "
              >
                Gửi <PaperAirplaneIcon className="w-5" />
              </button>
            </div>
          </form>
          <div className=" overflow-y-auto">
            <ChatReci />
            <ChatReci />
            <ChatReci />
            <ChatReci />
            <ChatReci />
            <ChatReci />
            <ChatReci />
            <ChatSend />
            <ChatSend />
            <ChatSend />
            <ChatSend />
            <ChatSend />
          </div>
        </div>
      </TitleCard>
    </div>
  );
};
