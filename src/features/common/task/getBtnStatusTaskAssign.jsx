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
  console.log('idStatus:', idStatus)
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
        <li>
          <button
            onClick={() => {
              updateStatusTask(4);
            }}
          >
            <ClipboardDocumentCheckIcon className="w-4" />
            Xác nhận hoàn thành
          </button>

        </li>
      );

    case 4:
      return (
        <li>
          <button
            onClick={() => {
              updateStatusTask(1);
            }}
          >
            <ClipboardDocumentCheckIcon className="w-4" />
            Mở lại công việc
          </button>
        </li>

      );

    default:
    // return (
    //   <button onClick={updateStatusTask}>
    //     <RocketLaunchIcon className="w-4" />
    //     Thực hicxxxx
    //   </button>
    // );
  }
};
