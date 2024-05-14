export const getDummyDeadline = (deadline) => {
    if (deadline < 0)
      return (
        <div className="badge font-semibold bg-custom-error border-custom-error absolute bottom-2.5 pb-1 right-3 ">
          Quá hạn {deadline * -1} ngày
        </div>
      );
    else if (deadline < 3 && deadline > 0)
      return (
        <div className="badge font-semibold bg-custom-warning border-custom-warning absolute bottom-2.5 pb-1 right-3 ">
          Còn {deadline} ngày
        </div>
      );
    else if (deadline === 0)
      return (
        <div className="badge font-semibold bg-custom-warning border-custom-warning absolute bottom-2.5 pb-1 right-3 ">
          Đến hạn
        </div>
      );
    else
      return (
        <div className="badge font-semibold bg-custom-success border-custom-success absolute bottom-2.5 pb-1 right-3 ">
          Còn {deadline} ngày
        </div>
      );
  };