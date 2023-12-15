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

export default function DrawerContent() {
  const listItems = [
    { title: "داشبورد", icon: <DashboardIcon /> },
    { title: "آمارها", icon: <StatisticsIcon /> },
    { title: "تراکنش ها", icon: <TransactionIcon /> },
    { title: "تیم من", icon: <MyTeamIcon /> },
    { title: "گزارش فروش", icon: <SellReportIcon /> },
    { title: "تنظیمات", icon: <SettingIcon /> },
  ];

  return (
    <div>
      <SidebarHeader />
      <div className="flex flex-col justify-between h-full">
        <div>
          <List>
            {listItems.map((item) => (
              <ListItem key={item.title}>
                <LButton label={item.title} onClick={() => {}}>
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
