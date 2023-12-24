import LogoutBtn from "../buttons/LogoutBtn";
import SAvatar from "../avatars/Avatar";
import AvatarIcon from "../icons/AvatarIcon";
import { useSelector } from "react-redux";
import { UserModel } from "@/interfaces/user.interface";

export default function SidebarFooter() {
  const user: UserModel = useSelector((state: any) => state.user.userData);

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className="flex flex-col items-center w-full mb-8">
          {user.avatar ? <SAvatar src={user.avatar} alt="تصویر کاربر" /> : <AvatarIcon />}
          <p className="text-lg font-bold break-words">{user.fullName}</p>
          <p className="text-sm font-normal break-words">{user.role}</p>
        </div>
        <div className="flex flex-row justify-center w-full mb-7">
          <LogoutBtn />
        </div>
      </div>
    </>
  );
}
