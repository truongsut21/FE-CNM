import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { token } from "../token";

export const ActionReport = (
  idStatus,
  idUserAssignTask,
  handeUpdateStatusReport
) => {
  switch (idStatus) {
    case 1:
      return (
        <>
          <button
            onClick={handeUpdateStatusReport}
            className="btn btn-sm btn-success btn-outline"
          >
            <CheckIcon className="w-3" />
          </button>
          <button className="ml-3 btn btn-sm btn-error btn-outline">X</button>
        </>
      );

    case 2: // chờ xác nhận
      // nếu là người giao việc sẽ có chức năng xác nhận
      if (token().id === idUserAssignTask) {
        return (
          <>
            <button
              onClick={handeUpdateStatusReport}
              className="btn btn-sm btn-success btn-outline"
            >
              Xác nhận
            </button>
          </>
        );
      }
      // nếu là người nhân việc hiển thị trạng thái chờ xác nhận
      else {
        return (
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full ">
            Chờ xác nhận
          </span>
        );
      }

    case 3: // chờ xác nhận
      // nếu là người giao việc sẽ có chức năng xác nhận
      if (token().id === idUserAssignTask) {
        return (
          <>
            <button className="btn btn-sm btn-error btn-outline">Mở lại</button>
          </>
        );
      }
      // nếu là người nhân việc hiển thị trạng thái chờ xác nhận
      else {
        return (
          <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
            Đã hoàn thành
          </span>
        );
      }

    default:
      return `id status ${idStatus}`;
  }
};
