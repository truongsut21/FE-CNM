import React from "react";
import {
  EllipsisVerticalIcon,
  ClockIcon,
  ClipboardIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";

export const TaskComponent = ({ task, index }) => {
  const now = moment();
  const deadline = moment(task.thoihan).diff(now, "days");
  return (
    <>
      <div
        className={"card w-full p-3 bg-base-100 shadow-xl mt-2 ring-1"}
        key={index}
      >
        <div>
          <div className="inline-block float-right">
            <div className="flex items-center">
              <div className="dropdown dropdown-bottom dropdown-end  ml-2 z-50">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-sm normal-case btn-square "
                >
                  <EllipsisVerticalIcon className="w-5" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact   p-2 shadow bg-base-100 ring-1 rounded-box w-52"
                >
                  <li>
                    <a>
                      <ClockIcon className="w-4" />
                      Tạo nhắc nhở
                    </a>
                  </li>
                  <li>
                    <a>
                      <ClipboardIcon className="w-4" />
                      Báo cáo
                    </a>
                  </li>
                  <li>
                    <a>
                      <InformationCircleIcon className="w-4" />
                      Xem chi tiết
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm font-bold">{task.tencongviec}</p>
          <p className="text-xs">
            {task.tentrangthai} -{" "}
            <strong className="text-rose-500">Còn {deadline} ngày</strong>
          </p>
        </div>
        <div className="divider mt-2"></div>

        {/** Card Body */}
        <div className="h-full w-full bg-base-100">
          <div className="">
            <p className="flex text-sm">{task.noidung}</p>
          </div>
        </div>
      </div>
    </>
  );
};
