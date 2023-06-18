// import { object, string } from 'yup'
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  PassWord: Yup.string()
    .min(3, "پسورد اول حداقل باید 3 کاراکتر داشته باشه")
    .max(12, "پسورد اول حداکثر باید 12 کاراکتر داشته باشه")
    .required("پسورد اول را وارد نمایید"),
  email: Yup.string()
    .email("ایمیل وارد شده معتبر نمی‌باشد")
    .min(10, "ایمیل حداقل باید 10 کاراکتر داشته باشه")
    .max(30, "ایمیل حداکثر باید 30 کاراکتر داشته باشه")
    .required("ایمیل را وارد نمایید"),

    ReapetPassWord: Yup.string() 
    .min(10, "پسورد دوم حداقل باید 10 کاراکتر داشته باشه")
    .max(30, "پسورد دوم حداکثر باید 30 کاراکتر داشته باشه")
    .required("پسورد دوم را وارد نمایید"),
});

export default registerSchema;
