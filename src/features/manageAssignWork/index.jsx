import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskComponent } from "../common/TaskComponent";
import { getListAssignTask } from "../../app/taskSlice";
import { token } from "../../app/token";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { openModal } from "../common/modalSlice";

function ManageAssignWork() {
  const dispatch = useDispatch();
  const { taskAssign_taskSlice } = useSelector((state) => state.taskSlice);

  const openModalAddTaskAll = () => {
    dispatch(
      openModal({
        title: "Tạo công việc mới",
        bodyType: MODAL_BODY_TYPES.ADD_TASK_ALL,
      })
    );
  };

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
      <div>
        <div class="flex items-center me-4">
          <input
            checked
            id="red-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 "
          />
          <label
            for="red-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Red
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {taskAssign_taskSlice
          ? taskAssign_taskSlice.map((i, index) => {
              return <TaskComponent task={i} index={index} key={index} />;
            })
          : "Bạn chưa phân công công việc nào ..."}
      </div>
      <button
        onClick={openModalAddTaskAll}
        type="button"
        className=" fixed  bottom-10 right-10 z-50  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Tạo công việc mới
      </button>
    </div>
  );
}

export default ManageAssignWork;
