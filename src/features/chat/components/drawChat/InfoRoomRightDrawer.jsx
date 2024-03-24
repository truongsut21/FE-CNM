import { InfoBaseSection } from "./InfoBaseSection";

function InfoRoomRightDrawer() {
  return (
    <div className="mt-4 flex flex-col">
      <InfoBaseSection />


      <button className="btn w-full bg-rose-50 text-rose-700 border-none hover:bg-rose-200">
        Xoá liên hệ
      </button>
    </div>
  );
}

export default InfoRoomRightDrawer;
