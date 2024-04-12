// import React from "react";

// export const ChatReci = ({ content, id, name }) => {
//   return (
//     <div className="chat chat-start">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src={`https://avatar.iran.liara.run/public/${id}`}
//           />
//         </div>
//       </div>
//       <div className="chat-header">
//         {name}
//         <time className="text-xs opacity-50"> 02:29</time>
//       </div>
//       <div className="chat-bubble">{content}</div>
//     </div>
//   );
// };


import React from "react";
import moment from "moment"; // Import thư viện moment để xử lý thời gian

export const ChatReci = ({ content, id, name, time }) => {
  const formattedTime = moment(time).format("HH:mm");
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={`https://avatar.iran.liara.run/public/${id}`}
          />
        </div>
      </div>
      <div className="chat-header">
        {name}
        <time className="text-xs opacity-50"> {formattedTime}</time>
      </div>
      <div className="chat-bubble">{content}</div>
    </div>
  );
};
