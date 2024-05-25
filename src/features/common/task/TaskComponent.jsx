import React from "react";
import {
  EllipsisVerticalIcon,
  ClockIcon,
  ClipboardIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { openModal } from "../modalSlice";
import { getTaskStage } from "./getTaskStage";
import { getDummyDeadline } from "./getDummyDeadline";
import { getBtnStatusTaskReci } from "./getBtnStatusTaskReci";
import { showNotification } from "../headerSlice";
import { getListAssignTask, getListTaskReceived } from "../../../app/taskSlice";
import { token } from "../../../app/token";
import { getBtnStatusTaskAssign } from "./getBtnStatusTaskAssign";
import { FetchUpdateStatusTask } from "./services/FetchUpdateStatusTask";

export const TaskComponent = ({ task, index, typeTask }) => {
  console.log("typeTask:", typeTask);
  const dispatch = useDispatch();
  const now = moment();
  const deadline = moment(task.thoihan).diff(now, "days");
  const stage = task.maloaitrangthaicongviec;

  const openDetailsTaskModal = () => {
    dispatch(
      openModal({
        title: "Chi tiết công việc",
        bodyType: MODAL_BODY_TYPES.DETAILS_TASK,
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
          tennguoigiao: task.tennguoigiao,
          typeTask: typeTask,
        },
      })
    );
  };

  const openReportModal = (idTask, nameTask) => {
    dispatch(
      openModal({
        title: "Báo cáo công việc",
        bodyType: MODAL_BODY_TYPES.REPORT_TASK,
        size:"lg",
        extraObject: {
          idTask,nameTask
        },
      })
    );
  };

  const handleUpdateStatusTask = (data) => {
    const requestAPI = dispatch(FetchUpdateStatusTask(data));
    try {
      requestAPI.then((response) => {
        if (response.payload) {
          if (response.payload.success) {
            dispatch(
              showNotification({
                message: response.payload.message,
                status: 1,
              })
            );

            if (typeTask === "taskAssign") {
              // gọi danh sách công việc giao
              const dataSend = {
                manguoigiaoviec: token().id,
                manhom: null,
                manguoinhan: null,
              };

              dispatch(getListAssignTask(dataSend));
            } else {
              // gọi lại danh sách công việc nhận
              const dataSend = {
                manguoigiaoviec: null,
                manhom: null,
                manguoinhan: token().id,
              };

              dispatch(getListTaskReceived(dataSend));
            }
          } else {
            dispatch(
              showNotification({
                message: response.payload.message,
                status: 0,
              })
            );
          }
        } else {
          dispatch(
            showNotification({
              message: "Cập nhật trạng thái công việc thất bại",
              status: 0,
            })
          );
        }
      });
    } catch (error) {}
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
                  <button onClick={() => {openReportModal(task.macongviec, task.tencongviec)}}>
                    <ClipboardIcon className="w-4" />
                    Báo cáo
                  </button>
                </li>
                <li>
                  {typeTask === "taskAssign"
                    ? getBtnStatusTaskAssign(
                        task.macongviec,
                        task.maloaitrangthaicongviec,
                        handleUpdateStatusTask
                      )
                    : getBtnStatusTaskReci(
                        task.macongviec,
                        task.maloaitrangthaicongviec,
                        handleUpdateStatusTask
                      )}
                </li>
                <li>
                  <button onClick={openDetailsTaskModal}>
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
