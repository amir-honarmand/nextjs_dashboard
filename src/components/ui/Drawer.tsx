import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import SidebarFooter from "./SidebarFooter";
import SButton from "../buttons/Button";
import DashboardIcon from "../icons/DashboardIcon";
import StatisticsIcon from "../icons/StatisticsIcon";
import TransactionIcon from "../icons/TransactionIcon";
import MyTeamIcon from "../icons/MyTeamIcon";
import SellReportIcon from "../icons/SellReportIcon";
import SettingIcon from "../icons/SettingIcon";
import SidebarHeader from "./SidebarHeader";

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
                <SButton label={item.title} onClick={() => {}}>
                  {item.icon}
                </SButton>
              </ListItem>
            ))}
          </List>
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
}
