import React from "react";

export const ChatReci = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/329912740_6277300982326482_44612447103804705_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGn7Xuzm_s5XyvOBKTaCY5Ut8xa170YehK3zFrXvRh6EjVb3cwW3A46lyOjFpvuXwlrkiopePilgFLSQ7YcxUBP&_nc_ohc=GB-v4dh3cOEAX_CflsR&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAOvNxJgdIgUSUUve5qgLhFMSDBX69Bw3eJja0AN90r4g&oe=66001926"
          />
        </div>
      </div>
      <div className="chat-header">
        Linh Be
        <time className="text-xs opacity-50">02:29</time>
      </div>
      <div className="chat-bubble">cần merge vào main kh\</div>
    </div>
  );
};
