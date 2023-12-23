import { HTTP_METHOD } from "@/constants/enums";
import { httpService } from "./http";

export const apiService = {
  async fetchUser() {
    return await httpService("/user");
  },
};
