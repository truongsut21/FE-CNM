import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskComponent } from "../common/TaskComponent";
import { jwtDecode } from "jwt-decode";
import { getListTaskReceived } from "../../app/taskSlice";
const INITIAL_INTEGRATION_LIST = [
  {
    name: "Công việc giao 1",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
    isActive: true,
    description:
      "Slack is an instant messaging program designed by Slack Technologies and owned by Salesforce.",
  },
  {
    name: "Công việc giao 2",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    isActive: false,
    description:
      "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook.",
  },
  {
    name: "Linkedin",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    isActive: true,
    description:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
  },
  {
    name: "Google Ads",
    icon: "https://cdn-icons-png.flaticon.com/512/2301/2301145.png",
    isActive: false,
    description:
      "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings",
  },
  {
    name: "Gmail",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
    isActive: false,
    description:
      "Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide.",
  },
  {
    name: "Salesforce",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968880.png",
    isActive: false,
    description:
      "It provides customer relationship management software and applications focused on sales, customer service, marketing automation.",
  },
  {
    name: "Hubspot",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png",
    isActive: false,
    description:
      "American developer and marketer of software products for inbound marketing, sales, and customer service.",
  },
];


function ManageReceiveWork() {
  const dispatch = useDispatch();

  const { taskRecei_taskSlice } = useSelector((state) => state.taskSlice);
  console.log('taskRecei_taskSlice:', taskRecei_taskSlice)

  useEffect(() => {

    const tokenJWT = localStorage.getItem("token")
    const dataSend = {
      manguoigiaoviec: null,
      manhom: null,
      manguoinhan: jwtDecode(tokenJWT).id,
    };

    dispatch(getListTaskReceived(dataSend));

  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {taskRecei_taskSlice
          ? taskRecei_taskSlice.map((i, k) => {
            return <TaskComponent task={i} />;
          })
          : ""}
      </div>
    </>
  );
}

export default ManageReceiveWork;
