import React from "react";

export default function AvataUser({ name, mess, avata, active = false }) {
  return (
    <div
      className={`flex p-2 items-center gap-4 mt-2 rounded-md hover:bg-base-300 cursor-pointer ${
        active ? "bg-base-300" : ""
      }`}
    >
      <img className="w-10 h-10 rounded-full" src={avata} alt="" />
      <div className="font-medium dark:text-white">
        <div>{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{mess}</div>
      </div>
    </div>
  );
}
