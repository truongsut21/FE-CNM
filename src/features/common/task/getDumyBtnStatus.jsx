import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const getDumyBtnStatus = (status) => {
  const handeStatus = () => {
    console.log("handeStatus");
  };
  switch (status) {
    case 1:
      return (
        <button onClick={handeStatus}>
          <RocketLaunchIcon className="w-4" />
          Thực hiện công việc
        </button>
      );

    case 2:
      return (
        <button onClick={handeStatus}>
          <CheckIcon className="w-4" />
          Hoàn thành công việc
        </button>
      );

    case 3:
      return (
        <button onClick={handeStatus}>
          <ClipboardDocumentCheckIcon className="w-4" />
          Xác nhận hoàn thành
        </button>
      );

    default:
      return (
        <button onClick={handeStatus}>
          <RocketLaunchIcon className="w-4" />
          Thực hicxxxx
        </button>
      );
  }
};
