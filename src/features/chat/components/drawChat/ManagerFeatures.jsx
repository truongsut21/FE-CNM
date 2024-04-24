import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { ListTaskReceive } from "./ListTaskReceive";
import { ListAssignTask } from "./ListAssignTask";
import { ListMemberGroup } from "./ListMemberGroup";
import { useSelector } from "react-redux";

export default function ManagerFeatures() {
  const { infoRoom } = useSelector((state) => state.chatSlice);

  return (
    <div className="w-full px-0 pt-5">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {infoRoom.type === 1 && ( // nếu là nhóm thì render danh sách thành viên nhóm
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-2 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/75">
                  <span>Danh sách thành viên nhóm</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-rose-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pb-2 pt-4 text-sm text-gray-500">
                  <ListMemberGroup />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-2 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/75">
                <span>Danh sách công việc nhận</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-rose-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-2 text-sm text-gray-500">
                <ListTaskReceive />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rose-100 px-2 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/75">
                <span>Danh sách công việc giao</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-rose-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pb-2 pt-2 text-sm text-gray-500">
                <ListAssignTask />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
