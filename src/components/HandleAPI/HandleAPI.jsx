import { showNotification } from "../../features/common/headerSlice";

export const HandleAPI = ({ dispatch, funcSuccess, funcFaill, name }) => {
  const requestAPI = dispatch;
  try {
    requestAPI.then((response) => {
      console.log(`response: ${name} :`, response);

      if (response.payload) {
        if (response.payload.success) {
          dispatch(
            showNotification({
              message: `${name} thành công`,
              status: 1,
            })
          );

          funcSuccess();
        } else {
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
