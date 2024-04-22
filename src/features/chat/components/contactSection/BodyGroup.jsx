import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";
import AvataUser from "./AvataUser";
import { getPhonebook } from "../../../../app/phonebookSlice";
import { getListGroup } from "../../../../app/groupSlice";

export const BodyGroup = () => {
  const dispatch = useDispatch();
  const { listGroup } = useSelector((state) => state.groupSlice);

  const openAddNewGroupModal = () => {
    dispatch(
      openModal({
        title: "Thêm mới nhóm",
        bodyType: MODAL_BODY_TYPES.CREATE_GROUP,
      })
    );
  };

  // gọi danh sách danh bạ khi lần đầu vào
  useEffect(() => {
    dispatch(getListGroup());
  }, []);

  return (
    <div className="h-[37rem]">
      <form className="">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tìm kiếm..."
            required
          />

          <button
            type="submit"
            className="flex items-center text-white absolute end-2.5 bottom-2.5 bg-custom-primary hover:bg-custom-primary-hover  font-medium rounded-lg text-sm px-4 py-2 "
          >
            <MagnifyingGlassIcon className="w-5" />
          </button>
        </div>
      </form>

      <button
        className="btn btn-block btn-primary btn-sm mt-2"
        onClick={() => openAddNewGroupModal()}
      >
        {" "}
        <UserPlusIcon className="w-4" /> Tạo nhóm mới
      </button>

      <div className="overflow-y-auto h-5/6 ">
        {listGroup.length > 0 ? (
          listGroup.map((item) => (
            <AvataUser
              key={item.manhom}
              name={item.tennhom}
              id={item.manhom}
              leader={item.matruongnhom}
              type={1}
              mess={item.tinnhancuoi || "Chưa có tin nhắn"}
              avata={`https://avatar.iran.liara.run/public/${item.manhom}`}
            />
          ))
        ) : (
          <p className={`text-center text-gray-500`}>
            Bạn chưa có người bạn nào 👎 quá non
          </p>
        )}
      </div>
    </div>
  );
};
