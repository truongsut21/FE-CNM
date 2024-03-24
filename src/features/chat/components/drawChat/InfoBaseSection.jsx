import React from "react";
import { useSelector } from "react-redux";

export const InfoBaseSection = () => {
  const { infoRoom } = useSelector((state) => state.chatSlice);

  return (
    <div className="m-auto">
      <img
        className="w-20 rounded-full"
        src={`https://avatar.iran.liara.run/public/${infoRoom.id}`}
        alt=""
      />
      <p className="ml-2 font-bold text-xl mt-2">{infoRoom.name}</p>
    </div>
  );
};
