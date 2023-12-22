import { List, ListItem } from "@mui/material";
import SidebarFooter from "./SidebarFooter";
import DashboardIcon from "../icons/DashboardIcon";
import StatisticsIcon from "../icons/StatisticsIcon";
import TransactionIcon from "../icons/TransactionIcon";
import MyTeamIcon from "../icons/MyTeamIcon";
import SellReportIcon from "../icons/SellReportIcon";
import SettingIcon from "../icons/SettingIcon";
import SidebarHeader from "./SidebarHeader";
import LButton from "../buttons/ListButton";
import { useRouter } from "next/navigation";

export default function DrawerContent() {
  const router = useRouter();

  const listItems = [
    { title: "داشبورد", icon: <DashboardIcon />, route: "/auth" },
    { title: "آمارها", icon: <StatisticsIcon />, route: "/analytics" },
    { title: "تراکنش ها", icon: <TransactionIcon />, route: "/" },
    { title: "تیم من", icon: <MyTeamIcon />, route: "/" },
    { title: "گزارش فروش", icon: <SellReportIcon />, route: "/" },
    { title: "تنظیمات", icon: <SettingIcon />, route: "/" },
  ];

  return (
    <div>
      <SidebarHeader />
      <div className="flex flex-col justify-between h-full">
        <div>
          <List>
            {listItems.map((item) => (
              <ListItem key={item.title}>
                <LButton
                  label={item.title}
                  onClick={() => {
                    router.push(item.route);
                  }}
                >
                  {item.icon}
                </LButton>
              </ListItem>
            ))}
          </List>
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
}
