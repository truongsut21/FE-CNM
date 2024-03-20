import { useEffect } from "react";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { removeNotificationMessage } from "../features/common/headerSlice";



export const LayoutMessage = () => {
  const dispatch = useDispatch();
  const { newNotificationMessage, newNotificationStatus } = useSelector(
    (state) => state.header
  );

  useEffect(() => {
    if (newNotificationMessage !== "") {
      if (newNotificationStatus === 1)
        NotificationManager.success(newNotificationMessage, "Success");
      if (newNotificationStatus === 0)
        NotificationManager.error(newNotificationMessage, "Error");
      dispatch(removeNotificationMessage());
    }
  }, [newNotificationMessage]);
  return (
    <>
      {/** Notification layout container */}
      <NotificationContainer />
    </>
  );
};
