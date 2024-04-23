import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskComponent } from "../common/TaskComponent";
import { jwtDecode } from "jwt-decode";
import { getListAssignTask } from "../../app/taskSlice";
import { token } from "../../app/token";

function ManageAssignWork() {
  const dispatch = useDispatch();
  const { taskAssign_taskSlice } = useSelector((state) => state.taskSlice);

  useEffect(() => {
    const dataSend = {
      manguoigiaoviec: token().id,
      manhom: null,
      manguoinhan: null,
    };

    dispatch(getListAssignTask(dataSend));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {taskAssign_taskSlice
          ? taskAssign_taskSlice.map((i, index) => {
              return <TaskComponent task={i} index={index} />;
            })
          : ""}
      </div>
    </>
  );
}

export default ManageAssignWork;
