import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import ManageAssignWork from "../../features/manageAssignWork";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Quản lý công việc giao" }));
  }, []);

  return <ManageAssignWork />;
}

export default InternalPage;
