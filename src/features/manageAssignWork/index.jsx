import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskComponent } from "../common/TaskComponent";
import { jwtDecode } from "jwt-decode";
import { getListAssignTask } from "../../app/taskSlice";


function ManageAssignWork() {
    const dispatch = useDispatch();

    const { taskAssign_taskSlice } = useSelector((state) => state.taskSlice);
    console.log('taskAssign_taskSlice:', taskAssign_taskSlice)

    useEffect(() => {

        const tokenJWT = localStorage.getItem("token")
        const dataSend = {
            manguoigiaoviec: jwtDecode(tokenJWT).id,
            manhom: null,
            manguoinhan: null,
        };

        dispatch(getListAssignTask(dataSend));

    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {taskAssign_taskSlice
                    ? taskAssign_taskSlice.map((i, k) => {
                        return <TaskComponent task={i} />;
                    })
                    : ""}
            </div>
        </>
    );
}

export default ManageAssignWork;
