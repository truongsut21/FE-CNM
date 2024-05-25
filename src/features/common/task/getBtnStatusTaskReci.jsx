import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const getBtnStatusTaskReci = (
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
      return (
        <li>
          <button
            onClick={() => {
              updateStatusTask(2);
            }}
          >
            <RocketLaunchIcon className="w-4" />
            Thực hiện công việc
          </button>
        </li>

      );

    case 2:
      return (
        <li>
          <button
            onClick={() => {
              updateStatusTask(3);
            }}
          >
            <CheckIcon className="w-4" />
            Hoàn thành công việc
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
