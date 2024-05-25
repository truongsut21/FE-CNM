import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getListTaskReceived } from "../../app/taskSlice";
import { token } from "../common/token";
import { TaskComponent } from "../common/task/TaskComponent";

function ManageReceiveWork() {
  const dispatch = useDispatch();

  const { taskRecei_taskSlice } = useSelector((state) => state.taskSlice);

  useEffect(() => {
    const dataSend = {
      manguoigiaoviec: null,
      manhom: null,
      manguoinhan: token().id,
    };

    dispatch(getListTaskReceived(dataSend));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {taskRecei_taskSlice
          ? taskRecei_taskSlice.map((i, k) => {
              return <TaskComponent task={i} key={k}/>;
            })
          : ""}
      </div>
    </>
  );
}

export default ManageReceiveWork;
