import React from "react";

export const ChatSend = ({ content, id, name }) => {
  return (
    <div className="chat chat-end">
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
        <time className="text-xs opacity-50">02:30</time>
      </div>
      <div className="chat-bubble">{content}</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};
