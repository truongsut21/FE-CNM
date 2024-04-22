import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";
import AvataUser from "./AvataUser";
import { getPhonebook } from "../../../../app/phonebookSlice";

export const BodyPhonebook = () => {
  const dispatch = useDispatch();
  const { listPhonebook } = useSelector((state) => state.phonebookSlice);
  console.log("listPhonebook:", listPhonebook);

  const openAddNewLeadModal = () => {
    dispatch(
      openModal({
        title: "Thêm mới danh bạ",
        bodyType: MODAL_BODY_TYPES.ADD_PHONEBOOK,
      })
    );
  };

  // gọi danh sách danh bạ khi lần đầu vào
  useEffect(() => {
    dispatch(getPhonebook());
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
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
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
        onClick={() => openAddNewLeadModal()}
      >
        {" "}
        <UserPlusIcon className="w-4" /> Thêm mới danh bạ
      </button>

      <div className="overflow-y-auto h-5/6 ">
        {listPhonebook.length > 0 ? (
          listPhonebook.map((item, index) => (
            <div key={index}>
              <AvataUser
                key={item.madanhba}
                name={item.ten}
                id={item.manguoitrongdanhba}
                type={0}
                idPhonebook={item.madanhba}
                mess={item.tinnhancuoi || "Chưa có tin nhắn"}
                avata={`https://avatar.iran.liara.run/public/${item.madanhba}`}
              />
            </div>
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
