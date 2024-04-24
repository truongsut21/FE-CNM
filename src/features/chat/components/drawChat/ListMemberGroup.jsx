import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembersInGroup } from "../../../../app/groupSlice";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../../../utils/globalConstantUtil";
import { token } from "../../../common/token";
import { openModal } from "../../../common/modalSlice";
import { showNotification } from "../../../common/headerSlice";

export const ListMemberGroup = () => {
  const dispatch = useDispatch();
  const { infoRoom } = useSelector((state) => state.chatSlice);
  const { listNembers } = useSelector((state) => state.groupSlice);

  const handleDeleteMemberGroup = (idMember) => {
    if (infoRoom.leader === token().id) {
      dispatch(
        openModal({
          title: "Xác nhận xoá",
          bodyType: MODAL_BODY_TYPES.CONFIRMATION,
          extraObject: {
            message: `Bạn có chắc chắn muốn xoá thành viên này ra khỏi nhóm?`,
            type: CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_MEMBER_GROUP,
            _idGroup: infoRoom.id,
            _idMember: idMember,
          },
        })
      );
    } else {
      dispatch(
        showNotification({
          message: "Bạn không phải trưởng nhóm",
          status: 0,
        })
      );
    }
  };

  useEffect(() => {
    if (infoRoom.type === 1) {
      // nếu là nhóm thì mới tải
      dispatch(getAllMembersInGroup(infoRoom.id));
    }
  }, []);

  return (
    <div className="">
      <table className="table">
        <tbody>
          {listNembers.length > 0 &&
            listNembers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`https://avatar.iran.liara.run/public/${item.mataikhoan}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.ten}</div>
                        <div className="text-sm opacity-50">
                          {item.maloaiquyen === 2
                            ? "🔑" + item.tenloaiquyen
                            : item.tenloaiquyen}
                        </div>
                      </div>
                    </div>
                  </td>

                  <th>
                    <div className="dropdown dropdown-left">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-xs"
                      >
                        <EllipsisVerticalIcon className="w-5" />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Xem thông tin</a>
                        </li>
                        <li>
                          <a>Giao việc</a>
                        </li>
                        <li>
                          <a>Phân quyền</a>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleDeleteMemberGroup(item.mataikhoan);
                            }}
                          >
                            xoá
                          </button>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
