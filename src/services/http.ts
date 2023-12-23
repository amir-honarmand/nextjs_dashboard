import { HTTP_METHOD, STATUS_CODE } from "@/constants/enums";
import { HttpType } from "@/interfaces/httpType.interface";
import { customSnackbar } from "@/utils/SnackbarUtils";
import { isCSR } from "@/utils/csrCheck";
import { errorHandler } from "@/utils/errorHandler";
import axios from "axios";
import nookies from 'nookies'

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const httpService = async (
  url: string,
  { params, data, method, headers = {}, token, body, ...res }: HttpType = {}
) => {
  let getToken: string | { [key: string]: string } = nookies.get(null, 'token');
  getToken = getToken['token'];
  const asToken = token || getToken;

  // @ts-ignore
  return axios({
    baseURL,
    url,
    headers: {
      ...((token || getToken) && {
        Authorization: `Bearer ${asToken}`,
      }),
      ...headers,
    },
    params,
    data,
    body,
    method: method ? method : HTTP_METHOD.GET,
    ...res,
  })
    .then((res: any) => {
      if (handleStatusSuccess(res?.status)) {
        return res;
      } else return customSnackbar.error(res?.data?.message || res?.message);
    })
    .catch((e: any) => {
      customSnackbar.error(errorHandler(e));
      if (e?.status === STATUS_CODE.UNAUTHORIZED && isCSR()) {
        nookies.destroy(null, 'token');
        return (window.location.href = '/');
      }
      throw e;
    });
};

const handleStatusSuccess = (status: number) => {
  let statusSuccess = [STATUS_CODE.SUCCESS, STATUS_CODE.CREATED];
  return statusSuccess.some((i) => i === status);
};
