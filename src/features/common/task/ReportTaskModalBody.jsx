import { useState } from "react";
import { RECENT_TRANSACTIONS } from "../../../utils/dummyData";
import moment from "moment";
import {
  ClipboardIcon,
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
const Action = () => {
  return <></>;
};
function ReportTaskModalBody({ closeModal, extraObject }) {
  const [trans, setTrans] = useState(RECENT_TRANSACTIONS);
  return (
    <div className="flex h-[75vh]">
      <div className="w-2/3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Nội dung</th>
                <th>Ghi chú</th>
                <th>Ngày</th>
                <th>Dánh giá</th>
              </tr>
            </thead>
            <tbody>
              {trans.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>{l.email}</td>
                    <td>
                      {l.location}
                      <Action />
                    </td>
                    <td>{moment(l.date).format("DD/MM/YYYY")}</td>
                    <td>
                      <button className="btn btn-sm btn-success btn-outline">
                        <CheckIcon className="w-3" />
                        
                      </button>
                      <button className="ml-3 btn btn-sm btn-error btn-outline">
                        <HandThumbDownIcon className="w-3" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-green-700 w-1/3"></div>
    </div>
  );
}

export default ReportTaskModalBody;
