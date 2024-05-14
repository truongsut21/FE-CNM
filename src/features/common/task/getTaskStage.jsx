export const getTaskStage = (stage) => {
  if (stage === 1)
    return (
      <div
        className="relative"
        style={{ position: "absolute", left: "12px", bottom: "12px" }}
      >
        <div className="absolute bottom-0.5 left-0 badge bg-custom-error badge-xs border-custom-error"></div>
        <p className="text-xs text-gray-600 break-words mb-0 pl-4">
          Chưa bắt đầu
        </p>
      </div>
    );
  else if (stage === 2)
    return (
      <div
        className="relative"
        style={{ position: "absolute", left: "12px", bottom: "12px" }}
      >
        <div className="absolute bottom-0.5 left-0 badge bg-custom-success badge-xs border-custom-success"></div>
        <p className="text-xs text-gray-600 break-words mb-0 pl-4">
          Đang thực hiện
        </p>
      </div>
    );
  else if (stage === 3)
    return (
      <div
        className="relative"
        style={{ position: "absolute", left: "12px", bottom: "12px" }}
      >
        <div className="absolute bottom-0.5 left-0 badge bg-custom-warning badge-xs border-custom-warning"></div>
        <p className="text-xs text-gray-600 break-words mb-0 pl-4">
          Chờ xác nhận
        </p>
      </div>
    );
  else if (stage === 4)
    return (
      <div
        className="relative"
        style={{ position: "absolute", left: "12px", bottom: "12px" }}
      >
        <div className="absolute bottom-0.5 left-0 badge bg-green-600 badge-xs border-green-600"></div>
        <p className="text-xs text-gray-600 break-words mb-0 pl-4">
          Hoàn thành
        </p>
      </div>
    );
  else
    return (
      <div
        className="relative"
        style={{ position: "absolute", left: "12px", bottom: "12px" }}
      >
        <div className="absolute bottom-0.5 left-0 badge badge-success badge-xs border-success"></div>
        <p className="text-xs text-gray-600 break-words mb-0 pl-4">
          Hoàn thànhxxx
        </p>
      </div>
    );
};
