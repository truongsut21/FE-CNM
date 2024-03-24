import { useDispatch } from "react-redux";
import { showNotification } from "../../features/common/headerSlice";

export const HandleAPI = ({ dispatchAPI, funcSuccess, funcFaill, name }) => {
  const dispatch = useDispatch();
  const requestAPI = dispatchAPI;
  try {
    requestAPI.then((response) => {
      console.log(`response: ${name} :`, response);

      if (response.payload) {
        if (response.payload.success) {
          console.log("oke")
          dispatch(
            showNotification({
              message: `${name} thành công`,
              status: 1,
            })
          );

          funcSuccess();
        } else {
          console.log("no")
          dispatch(
            showNotification({
              message: response.payload.message,
              status: 0,
            })
          );

          funcFaill();
        }
      } else {
        dispatch(showNotification({ message: `${name} thất bại`, status: 0 }));
      }
    });
  } catch (error) {}
};
