import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";
import AvataUser from "./AvataUser";
import { getPhonebook } from "../../../../app/phonebookSlice";
import { getListGroup } from "../../../../app/groupSlice";
import { BtnCyanBlue } from "../../../../components/Button/BtnCyanBlue";

export const BodyGroup = () => {
  const dispatch = useDispatch();
  const { listGroup } = useSelector((state) => state.groupSlice);

  const [filteredListGroup, setFilteredListGroup] = useState(listGroup);
  const openAddNewGroupModal = () => {
    dispatch(
      openModal({
        title: "Thêm mới nhóm",
        bodyType: MODAL_BODY_TYPES.CREATE_GROUP,
      })
    );
  };

  const handleFilterListGroup = (txtfilter) => {
    if (txtfilter !== "") {
      const res = listGroup.filter((item) =>
        item.tennhom.toLowerCase().includes(txtfilter.toLowerCase())
      );
      setFilteredListGroup(res);
    } else {
      setFilteredListGroup(listGroup);
    }
  };
  // gọi danh sách danh bạ khi lần đầu vào
  useEffect(() => {
    dispatch(getListGroup());
  }, []);

  useEffect(() => {
    setFilteredListGroup(listGroup);
  }, [listGroup]);

  return (
    <div className="h-full">
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
            onChange={(e) => handleFilterListGroup(e.target.value)}
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
            placeholder="Tìm kiếm..."
            required
          />
        </div>
      </form>

      <BtnCyanBlue
        title="Tạo nhóm mới"
        icon={<UserPlusIcon className="w-4 mr-2" />}
        classCustom="btn-block mt-2"
        callback={openAddNewGroupModal}
      />

      <div className="overflow-y-auto h-[46vh] ">
        {filteredListGroup.length > 0 ? (
          filteredListGroup.map((item) => (
            <AvataUser
              key={item.manhom}
              name={item.tennhom}
              id={item.manhom}
              leader={item.matruongnhom}
              type={1}
              mess={item.tinnhancuoi || "Chưa có tin nhắn"}
              countMess={item.soluongtin}
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
