import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../../common/token";
import { getListAssignTask } from "../../../../app/taskSlice";
import {
  CheckCircleIcon,
  CheckIcon,
  ClipboardIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";

const getTaskStage = (item) => {
  if (item.maloaitrangthaicongviec === 3)
    return (
      <div
        id="task"
        className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent hover:border-l-indigo-300 bg-gradient-to-r  to-transparent hover:from-slate-100 transition ease-linear duration-150"
      >
        <div className="inline-flex items-center space-x-2">
          <div>
            <CheckIcon className="w-4" />
          </div>
          <div className="text-slate-500 line-through">{item.tencongviec}</div>
        </div>
        <div>
          <Action />
        </div>
      </div>
    );
  else
    return (
      <div
        id="task"
        className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent hover:border-l-indigo-300 bg-gradient-to-r  to-transparent hover:from-slate-100 transition ease-linear duration-150"
      >
        <div className="inline-flex items-center space-x-2">
          <div>
            <CheckCircleIcon className="w-4" />
          </div>
          <div>{item.tencongviec}</div>
        </div>
        <div>
          <Action task={item} />
        </div>
      </div>
    );
};

const Action = ({ task }) => {
  const dispatch = useDispatch();
  const openDetailsTaskAssignkModal = () => {
    dispatch(
      openModal({
        title: "Chi tiết công việc giao",
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
        },
      })
    );
  };

  return (
    <details className="dropdown dropdown-bottom dropdown-end  ml-2">
      <summary
        tabIndex={0}
        className="btn btn-ghost btn-sm normal-case btn-square"
      >
        <EllipsisVerticalIcon className="w-5" />
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-compact   p-2 shadow bg-base-100 ring-1 rounded-box w-52 z-10"
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
          <button onClick={openDetailsTaskAssignkModal}>
            <InformationCircleIcon className="w-4" />
            Xem chi tiết
          </button>
        </li>
      </ul>
    </details>
  );
};

export const ListAssignTask = () => {
  const dispatch = useDispatch();
  const { taskAssign_taskSlice } = useSelector((state) => state.taskSlice);
  const { infoRoom } = useSelector((state) => state.chatSlice);

  useEffect(() => {
    const dataSend = {
      manguoigiaoviec: token().id,
      manhom: infoRoom.type === 1 ? infoRoom.id : null,
      manguoinhan: infoRoom.type === 0 ? infoRoom.id : null,
    };

    // if (!taskAssign_taskSlice) {
    dispatch(getListAssignTask(dataSend));
    // }
  }, []);
  return (
    <body className="antialiased bg-slate-200 text-slate-700 mx-2">
      <div className="max-w-lg mx-auto bg-white ">
        <div id="tasks" className="">
          {taskAssign_taskSlice &&
            taskAssign_taskSlice.length > 0 &&
            taskAssign_taskSlice.map((item, index) => {
              return getTaskStage(item);
            })}
          {taskAssign_taskSlice &&
            taskAssign_taskSlice.length === 0 &&
            "Bạn chưa có công việc nào"}
        </div>
      </div>
    </body>
  );
};
