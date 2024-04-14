import React from "react";
import {
  EllipsisVerticalIcon,
  ClockIcon,
  ClipboardIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";

const getDummyDeadline = (deadline) => {
  if (deadline < 0)
    return (
      <div className="badge font-semibold bg-custom-error absolute bottom-3 right-3 ">
        Quá hạn {deadline * -1} ngày
      </div>
    );
  else if (deadline < 3 && deadline > 0)
    return (
      <div className="badge font-semibold bg-custom-warning absolute bottom-3 right-3 ">
        Còn {deadline} ngày
      </div>
    );
    else if (deadline === 0)
    return (
      <div className="badge font-semibold bg-custom-warning absolute bottom-3 right-3 ">
        Đến hạn
      </div>
    );
  else
    return (
      <div className="badge font-semibold bg-custom-success absolute bottom-3 right-3 ">
        Còn {deadline} ngày
      </div>
    );
};

export const TaskComponent = ({ task, index }) => {
  const now = moment();
  const deadline = moment(task.thoihan).diff(now, "days");
  return (
    <>
      <div className="relative w-auto rounded-lg bg-white border border-gray-200 shadow  p-3">
        <div>
          <p className="font-bold text-md mb-2 mr-5">{task.tencongviec}</p>

          {/* btn  */}
          <div className="absolute top-3 right-3">
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
        <div className="divider m-0"></div>

        <p
          className="text-sm break-words mb-7"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            padding: 0,
          }}
        >
          {task.noidung}
        </p>

        <div className=" absolute bottom-3 left-3 badge badge-success badge-xs"></div>

        {getDummyDeadline(deadline)}
      </div>

      {/* <div
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

        <div className="h-full w-full bg-base-100">
          <div className="">
            <p className="flex text-sm">{task.noidung}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};
