import { baseUrl } from "./baseUrl";
import { UserAuthType } from "../types/AuthType";
import { AxiosError } from "axios";

export const postRegister = async (url: string, data: UserAuthType) => {
  try {
    const res = await baseUrl({
      url,
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
