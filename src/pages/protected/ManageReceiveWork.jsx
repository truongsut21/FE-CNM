import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import ManageReceiveWork from "../../features/manageReceiveWork";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Quản lý công việc nhận" }));
  }, []);

  return <ManageReceiveWork />;
}

export default InternalPage;
