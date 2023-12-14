import {} from "@mui/material";
import { styled } from "@mui/material/styles";
import LogoutBtn from "../buttons/LogoutBtn";
import SAvatar from "../images/Avatar";
import AvatarIcon from "../icons/AvatarIcon";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function SidebarFooter({ drawerWidth }: { drawerWidth: number }) {
  const user = '';

  return (
    <>
      <div className={`flex flex-col items-center mt-10`}>
        <div className="flex flex-col items-center w-full mb-8">
          {user ? <SAvatar src="#" alt="تصویر کاربر" /> : <AvatarIcon />}
          <p className="text-lg font-bold break-words">امیر هنرمند زاده</p>
          <p className="text-sm font-normal break-words">مدیر فروش</p>
        </div>
        <div className="flex flex-row justify-center w-full mb-7">
          <LogoutBtn />
        </div>
      </div>
      {/* <Offset /> */}
    </>
  );
}
