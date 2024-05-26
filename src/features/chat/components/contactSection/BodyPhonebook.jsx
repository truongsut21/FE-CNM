import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";
import AvataUser from "./AvataUser";
import { getPhonebook } from "../../../../app/phonebookSlice";
import { BtnCyanBlue } from "../../../../components/Button/BtnCyanBlue";

export const BodyPhonebook = () => {
  const dispatch = useDispatch();
  const { listPhonebook } = useSelector((state) => state.phonebookSlice);

  const [filteredListPhoneBook, setFilteredListPhoneBook] =
    useState(listPhonebook);

  const openAddNewLeadModal = () => {
    dispatch(
      openModal({
        title: "Thêm mới danh bạ",
        bodyType: MODAL_BODY_TYPES.ADD_PHONEBOOK,
      })
    );
  };

  const handleFilterListPhoneBook = (txtfilter) => {
    console.log("txtfilter:", txtfilter);
    if (txtfilter !== "") {
      const res = listPhonebook.filter((item) =>
        item.ten.toLowerCase().includes(txtfilter.toLowerCase())
      );
      setFilteredListPhoneBook(res);
    } else {
      setFilteredListPhoneBook(listPhonebook);
    }
  };

  // gọi danh sách danh bạ khi lần đầu vào
  useEffect(() => {
    dispatch(getPhonebook());
  }, []);

  // gọi danh sách danh bạ khi lần đầu vào
  useEffect(() => {
    setFilteredListPhoneBook(listPhonebook);
  }, [listPhonebook]);
  return (
    <div className="h-full ">
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
            onChange={(e) => handleFilterListPhoneBook(e.target.value)}
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
            placeholder="Tìm kiếm..."
            required
          />
        </div>
      </form>

      <BtnCyanBlue
        title="Thêm mới danh bạ"
        icon={<UserPlusIcon className="w-4 mr-2" />}
        classCustom="btn-block mt-2"
        callback={openAddNewLeadModal}
      />

      <div className="overflow-y-auto h-5/6 ">
        {filteredListPhoneBook.length > 0 ? (
          filteredListPhoneBook.map((item, index) => (
            <div key={index}>
              <AvataUser
                key={item.madanhba}
                name={item.ten}
                id={item.manguoitrongdanhba}
                type={0}
                idPhonebook={item.madanhba}
                mess={item.tinnhancuoi || "Chưa có tin nhắn"}
                countMess={item.soluongtin}
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
