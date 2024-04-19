import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../../common/token";
import { getListTaskReceived } from "../../../../app/taskSlice";
import {
  ClipboardIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const getTaskStage = (stage) => {
  if (stage === 1)
    return (
      <p className="text-center badge bg-custom-warning badge-xs border-custom-warning"></p>
    );
  else if (stage === 2)
    return (
      <p className="  text-center badge bg-custom-success badge-xs border-custom-success"></p>
    );
  else
    return (
      <p className=" text-center badge badge-success badge-xs border-success"></p>
    );
};

const Action = () => {
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
          <a>
            <InformationCircleIcon className="w-4" />
            Xem chi tiết
          </a>
        </li>
      </ul>
    </details>
  );
};
export const ListTaskReceive = () => {
  const dispatch = useDispatch();
  const { taskRecei_taskSlice } = useSelector((state) => state.taskSlice);
  console.log("taskRecei_taskSlice:", taskRecei_taskSlice);

  useEffect(() => {
    const dataSend = {
      manguoigiaoviec: null,
      manhom: null,
      manguoinhan: token().id,
    };

    if (!taskRecei_taskSlice) {
      dispatch(getListTaskReceived(dataSend));
    }
  }, []);

  return (
    <table className="table">
      <tbody>
        {taskRecei_taskSlice &&
          taskRecei_taskSlice.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}. {item.tencongviec}</td>
                <td>{getTaskStage(item.maloaitrangthaicongviec)}</td>
                <td>
                  <Action />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
