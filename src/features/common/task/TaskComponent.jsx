import React from "react";
import {
  EllipsisVerticalIcon,
  ClockIcon,
  ClipboardIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { openModal } from "../modalSlice";
import { getTaskStage } from "./getTaskStage";
import { getDummyDeadline } from "./getDummyDeadline";
import { getDumyBtnStatus } from "./getDumyBtnStatus";

export const TaskComponent = ({ task, index }) => {
  console.log("task:", task);
  const dispatch = useDispatch();
  const now = moment();
  const deadline = moment(task.thoihan).diff(now, "days");
  const stage = task.maloaitrangthaicongviec;

  const openDetailsTaskAssignkModal = () => {
    dispatch(
      openModal({
        title: "Chi tiết công việc",
        bodyType: MODAL_BODY_TYPES.DETAILS_TASK_ASSIGN,
        extraObject: {
          macongviec: task.macongviec,
          tencongviec: task.tencongviec,
          noidung: task.noidung,
          manguoigiaoviec: task.manguoigiaoviec,
          ngaygiao: task.ngaygiao,
          thoihan: task.thoihan,
          manguoinhan: task.manguoinhan,
          maloaitrangthaicongviec: task.maloaitrangthaicongviec,
          tennguoinhan: task.tennguoinhan,
        },
      })
    );
  };

  return (
    <>
      <div className="relative w-auto rounded-lg bg-white border border-gray-200 shadow  p-3">
        <div>
          <p
            className="font-bold text-md mb-2 mr-5"
            // rút gọn chữ
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              padding: 0,
            }}
          >
            {task.tencongviec}
          </p>
          <p className="text-sm mb-2 mr-5">Người nhận: {task.tennguoinhan}</p>

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
                <li>{getDumyBtnStatus(task.maloaitrangthaicongviec)}</li>
                <li>
                  <button onClick={openDetailsTaskAssignkModal}>
                    <InformationCircleIcon className="w-4" />
                    Xem chi tiết
                  </button>
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

        {/* <div className=" absolute bottom-3 left-3 badge badge-success badge-xs"></div> */}
        {getTaskStage(stage)}

        {getDummyDeadline(deadline)}
      </div>
    </>
  );
};
