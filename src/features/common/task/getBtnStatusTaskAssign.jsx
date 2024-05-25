import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const getBtnStatusTaskAssign = (
  idTask,
  idStatus,
  handleUpdateStatusTask
) => {
  const updateStatusTask = (_idStatus) => {
    const data = {
      macongviec: idTask,
      maloaitrangthaicongviec: _idStatus,
    };
    handleUpdateStatusTask(data);
  };
  switch (idStatus) {
    case 1:
      // return (
      //   <button onClick={updateStatusTask}>
      //     <RocketLaunchIcon className="w-4" />
      //     Thực hiện công việc
      //   </button>
      // );
      break;

    case 2:
      // return (
      //   <button onClick={updateStatusTask}>
      //     <CheckIcon className="w-4" />
      //     Hoàn thành công việc
      //   </button>
      // );
      break;

    case 3:
      return (
        <button
          onClick={() => {
            updateStatusTask(4);
          }}
        >
          <ClipboardDocumentCheckIcon className="w-4" />
          Xác nhận hoàn thành
        </button>
      );

    case 4:
      return (
        <button
          onClick={() => {
            updateStatusTask(1);
          }}
        >
          <ClipboardDocumentCheckIcon className="w-4" />
          Mở lại công việc
        </button>
      );

    default:
      return (
        <button onClick={updateStatusTask}>
          <RocketLaunchIcon className="w-4" />
          Thực hicxxxx
        </button>
      );
  }
};
