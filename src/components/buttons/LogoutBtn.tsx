import { MdLogout } from "react-icons/md";
import SButton from "./Button";
import LogoutIcon from "../icons/LogoutIcon";

export default function LogoutBtn() {
  return (
    <SButton label="خروج" onClick={()=>{}}>
      <LogoutIcon/>
    </SButton>
  );
}
