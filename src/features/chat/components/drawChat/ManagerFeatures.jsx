import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  ClipboardIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembersInGroup } from "../../../../app/groupSlice";
import { token } from "../../../common/token";
import { showNotification } from "../../../common/headerSlice";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../../../utils/globalConstantUtil";
import { openModal } from "../../../common/modalSlice";

export default function ManagerFeatures() {
  const dispatch = useDispatch();
  const { listNembers } = useSelector((state) => state.groupSlice);
  const { infoRoom } = useSelector((state) => state.chatSlice);
  console.log("infoRoom:", infoRoom);

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
    <div className="w-full px-0 pt-5">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {infoRoom.type === 1 && ( // nếu là nhóm thì render danh sách thành viên nhóm
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-2 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/75">
                  <span>Danh sách thành viên nhóm</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-rose-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pb-2 pt-4 text-sm text-gray-500">
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
                                      <div className="font-bold">
                                        {item.ten}
                                      </div>
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
                                            handleDeleteMemberGroup(
                                              item.mataikhoan
                                            );
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
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-2 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/75">
                <span>Danh sách công việc nhận</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-rose-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-4 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-2 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/75">
                <span>Danh sách công việc giao</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-rose-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-4 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
