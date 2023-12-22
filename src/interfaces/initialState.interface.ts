import { UserModel } from "./user.interface";

export interface InitialState {
  isAuth: boolean;
  userData: UserModel | {};
  loading: boolean;
  error: any;
}
