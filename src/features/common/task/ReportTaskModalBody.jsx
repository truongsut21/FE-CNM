import { useEffect, useState } from "react";
import { RECENT_TRANSACTIONS } from "../../../utils/dummyData";
import moment from "moment";
import { CheckIcon, HandThumbDownIcon } from "@heroicons/react/24/outline";
import InputTextFormik from "../../../components/inputFormik/InputTextFormik";
import InputAreaFormik from "../../../components/inputFormik/InputAreaFormik";
import { token } from "../token";
import { useFormik } from "formik";
import * as Yup from "yup";
import { validationRequired } from "../../../components/yup/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { FetchCreateReport } from "./services/FetchCreateReport";
import { showNotification } from "../headerSlice";
import { getListReport } from "../../../app/taskSlice";
import { ActionReport } from "./ActionReport";
import { FetchUpdateStatusReport } from "./services/FetchUpdateStatusReport";

function ReportTaskModalBody({ closeModal, extraObject }) {
  console.log("extraObject:", extraObject);
  const { reports_taskSlice } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState(0);

  const formik = useFormik({
    initialValues: {
      macongviec: extraObject.idTask,
      manguoigui: token().id,
      noidung: "",
      ghichu: "",
      thoigiangui: moment().format("YYYY-MM-DD HH:mm:ss"),
      dinhkem: null,
    },
    validationSchema: Yup.object({
      noidung: validationRequired,
    }),

    onSubmit: (values) => {
      console.log("values:", values);
      const requestAPI = dispatch(FetchCreateReport(values));
      try {
        requestAPI.then((response) => {
          if (response.payload) {
            if (response.payload.success) {
              dispatch(
                showNotification({
                  message: response.payload.message,
                  status: 1,
                })
              );
              formik.setFieldValue("noidung", "");
              formik.setFieldValue("ghichu", "");

              // gửi lại api lấy danh sách công việc
              const dataSend = {
                macongviec: extraObject.idTask,
              };
              dispatch(getListReport(dataSend));
            } else {
              dispatch(
                showNotification({
                  message: response.payload.message,
                  status: 0,
                })
              );
            }
          } else {
            dispatch(
              showNotification({ message: "Tạo báo cáo thất bại", status: 0 })
            );
          }
        });
      } catch (error) {}
    },
  });

  const handeUpdateStatusReport = (idReport, status) => {
    // người giao mở lại công việc
    if (status === 4) {
      status = 1;
    }
    const dataSend = {
      mabaocaotiendo: idReport,
      matrangthaibc: status,
    };
    const requestAPI = dispatch(FetchUpdateStatusReport(dataSend));
    try {
      requestAPI.then((response) => {
        if (response.payload) {
          if (response.payload.success) {
            dispatch(
              showNotification({
                message: response.payload.message,
                status: 1,
              })
            );

            // gửi lại api lấy danh sách công việc
            const dataSend2 = {
              macongviec: extraObject.idTask,
            };
            dispatch(getListReport(dataSend2));
          } else {
            dispatch(
              showNotification({
                message: response.payload.message,
                status: 0,
              })
            );
          }
        } else {
          dispatch(
            showNotification({
              message: "Cập nhật trạng thái báo cáo thất bại",
              status: 0,
            })
          );
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    const dataSend = {
      macongviec: extraObject.idTask,
    };
    dispatch(getListReport(dataSend));
  }, []);

  useEffect(() => {
    const count = reports_taskSlice
      ? reports_taskSlice.reduce((accumulator, current) => {
          return current.matrangthaibc === 3 ? accumulator + 1 : accumulator;
        }, 0)
      : 0;
    const total = reports_taskSlice ? reports_taskSlice.length : 1;
    const percentage = Math.round((count / total) * 100);
    setPercentage(percentage);
  }, [reports_taskSlice]);

  return (
    <div className="flex h-[75vh]">
      <div className="w-2/3 overflow-y-auto">
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
              {reports_taskSlice &&
                reports_taskSlice.map((report, k) => {
                  return (
                    <tr key={k}>
                      <td>
                        <div className="badge bg-custom-error badge-xs border-custom-error mr-2"></div>
                        {report.noidung}
                      </td>
                      <td>{report.ghichu}</td>
                      <td>{moment(report.thoigiangui).format("DD/MM/YYYY")}</td>
                      <td>
                        {ActionReport(
                          report.matrangthaibc,
                          extraObject.idUserAssignTask,
                          () => {
                            handeUpdateStatusReport(
                              report.mabaocaotiendo,
                              report.matrangthaibc + 1
                            );
                          }
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="pl-5 w-1/3">
        <h1 className="flex items-center text-2xl font-extrabold mb-5">
          {extraObject.nameTask}
        </h1>
        <span className=" bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded ">
          Tiến độ công việc: {percentage} %
        </span>
        <InputTextFormik
          labelTitle="Nội dung"
          name="noidung"
          onChange={formik.handleChange}
          value={formik.values.noidung}
          errors={formik.errors.noidung}
        />

        <InputAreaFormik
          containerStyle="mt-4"
          labelTitle="Ghi chú"
          type="text"
          name="ghichu"
          onChange={formik.handleChange}
          value={formik.values.ghichu}
          errors={formik.errors.ghichu}
        />
        <button
          type="submit"
          className="w-full mt-5    text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Tạo báo cáo mới
        </button>
      </form>
    </div>
  );
}

export default ReportTaskModalBody;
