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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {taskAssign_taskSlice
          ? taskAssign_taskSlice.map((i, index) => {
              return <TaskComponent task={i} index={index} key={index} />;
            })
          : "Bạn chưa phân công công việc nào ..."}
      </div>
      <button
        type="button"
        className=" fixed  bottom-10 right-10 z-50  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Tạo công việc mới
      </button>
    </div>
  );
}

export default ManageAssignWork;
