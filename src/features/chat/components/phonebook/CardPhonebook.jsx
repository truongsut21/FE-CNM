import React, { useEffect, useState } from "react";
import TitleCard from "../../../../components/Cards/TitleCard";
import { useDispatch } from "react-redux";
import { getPhonebook } from "../../../../app/phonebookSlice";
import { Tab } from "@headlessui/react";
import { BodyPhonebook } from "./BodyPhonebook";
import { BodyGroup } from "./BodyGroup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const CardPhonebook = () => {
  const [tabsTitle] = useState(["Danh bạ", "Nhóm"]);
  let [categories] = useState({
    Nhóm: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });
  return (
    <div className="col-span-1">
      <Tab.Group>
        <TitleCard
          title={
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {tabsTitle.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-primary-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          }
          topMargin="mt-2"
        >
          <Tab.Panels className="mt-2">
            <Tab.Panel
              key={0}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <BodyPhonebook />
            </Tab.Panel>

            <Tab.Panel
              key={1}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <BodyGroup />
            </Tab.Panel>
          </Tab.Panels>
        </TitleCard>
      </Tab.Group>
    </div>
  );
};
