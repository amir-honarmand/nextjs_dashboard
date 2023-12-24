import { HTTP_METHOD, STATUS_CODE } from "@/constants/enums";
import { HttpType } from "@/interfaces/httpType.interface";
import { customSnackbar } from "@/utils/SnackbarUtils";
import { isCSR } from "@/utils/csrCheck";
import { errorHandler } from "@/utils/errorHandler";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import nookies from "nookies";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const httpService = async (
  url: string,
  { params, data, method, headers = {}, token, ...res }: HttpType = {}
): Promise<AxiosResponse<any, any>> => {
  let getToken: string | { [key: string]: string } = nookies.get(null, "token");
  getToken = getToken["token"];
  const asToken = token || getToken || "";

  const config: AxiosRequestConfig<any> = {
    baseURL,
    url,
    headers: {
      ...(asToken && {
        Authorization: `Bearer ${asToken}`,
      }),
      "Content-Type": "application/json",
      ...headers,
    },
    params,
    data,
    method: method ? method : HTTP_METHOD.GET,
    // withCredentials: true,
    ...res,
  };

  return axios(config)
    .then((res: any) => {
      if (handleStatusSuccess(res?.status)) {
        return res;
      } else return customSnackbar.error(res?.data?.message || res?.message);
    })
    .catch((e: any) => {
      if (e?.response?.status === STATUS_CODE.UNAUTHORIZED && isCSR()) {
        nookies.destroy(null, "token");
        return (window.location.href = "/auth");
      }
      if (e?.response?.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
        customSnackbar.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
      } else {
        customSnackbar.error(errorHandler(e));
      }

      throw e;
    });
};

const handleStatusSuccess = (status: number) => {
  let statusSuccess = [STATUS_CODE.SUCCESS, STATUS_CODE.CREATED];
  return statusSuccess.some((i) => i === status);
};
