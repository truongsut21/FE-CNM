import React from 'react'
import TitleCard from '../../components/Cards/TitleCard'
import {
    EllipsisVerticalIcon,
    ClockIcon,
    ClipboardIcon,
    InformationCircleIcon
} from "@heroicons/react/24/outline";
import moment from 'moment';

const TopSideButtons = ({ status, time }) => {
    const now = moment();
    const deadline = moment(time).diff(now, 'days');

    return (
        <div className="flex items-center">
            <p className="text-xs">{status} - <strong className="text-rose-500">Còn {deadline} ngày</strong></p>
            <div className="dropdown dropdown-bottom dropdown-end  ml-2 ">
                <label
                    tabIndex={0}
                    className="btn btn-ghost btn-sm normal-case btn-square "
                >
                    <EllipsisVerticalIcon className="w-5" />
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu menu-compact   p-2 shadow bg-base-100 ring-1 rounded-box w-52"
                >
                    <li>
                        <a>
                            <ClockIcon className="w-4" />
                            Tạo nhắc nhở
                        </a>
                    </li>
                    <li>
                        <a>
                            <ClipboardIcon className="w-4" />
                            Báo cáo
                        </a>
                    </li>
                    <li>
                        <a>
                            <InformationCircleIcon className="w-4" />
                            Xem chi tiết
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export const TaskComponent = ({ task }) => {
    return (
        <>
            <TitleCard
                title={task.tencongviec}
                topMargin={"mt-2 ring-1"}
                TopSideButtons={<TopSideButtons status={task.tentrangthai} time={task.thoihan} />}
            >
                <div className="">
                    <p className="flex text-sm">
                        {task.noidung}
                    </p>
                </div>
            </TitleCard>

        </>
    )
}
