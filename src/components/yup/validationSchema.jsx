import moment from "moment";
import * as Yup from "yup";

export const validationEmail = Yup.string()
  .email("Email không hợp lệ")
  .required("Không được để trống");

export const validationPasword = Yup.string().required("Không được để trống");

export const validationName = Yup.string().required("Không được để trống");

export const validationFisrName = Yup.string().required("Không được để trống");

export const validationPhone = Yup.string()
  .required("Không được để trống")
  .matches(
    /^[0-9]{10,11}$/,
    "Số điện thoại phải là chuỗi chứa 10 hoặc 11 chữ số"
  );

export const validationAddress = Yup.string().required("Không được để trống");

export const validationRequired = Yup.string().required("Không được để trống");

export const validationPastDay = Yup.string()
  .required("Không được để trống")
  .test(
    "is-past-date",
    "Ngày sinh phải nhỏ hơn ngày hiện tại",
    function (value) {
      // Kiểm tra xem ngày sinh có hợp lệ và nhỏ hơn ngày hiện tại không
      if (!value) return true; // Nếu giá trị là rỗng, trả về true (để đảm bảo không hiển thị lỗi required)
      const selectedDate = moment(value, "YYYY-MM-DD");
      const currentDate = moment();
      return selectedDate.isValid() && selectedDate.isSameOrBefore(currentDate);
    }
  );
