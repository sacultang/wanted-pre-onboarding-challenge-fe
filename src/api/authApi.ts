import { baseUrl } from "./baseUrl";
import { UserAuthType } from "../types/AuthType";
import { AxiosError } from "axios";
export const postLogin = async () => {
  const res = await baseUrl({
    url: "/users/login",
    method: "post",
    data: JSON.stringify({
      email: "email",
      password: "propspassword",
    }),
  });
  console.log(res);
};

export const postJoin = async (data: UserAuthType) => {
  try {
    const res = await baseUrl({
      url: "/users/create",
      method: "POST",
      data,
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      return err.response?.data;
    }
  }
};
