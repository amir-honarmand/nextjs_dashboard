import SButton from "./Button";
import LogoutIcon from "../icons/LogoutIcon";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();

  return (
    <SButton
      label="خروج"
      onClick={() => {
        destroyCookie(null, "token");
        router.replace("/auth");
      }}
    >
      <LogoutIcon />
    </SButton>
  );
}
