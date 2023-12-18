import { IoMdPerson } from "react-icons/io";

export default function AvatarIcon({classes}: {classes?: string}) {
  return <IoMdPerson className={classes ? classes : "w-10 h-10 rounded-full bg-bgGray"} />;
}
