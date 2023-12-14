import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import SidebarFooter from "./SidebarFooter";

export default function DrawerContent() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <Avatar /> : <Avatar />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
      <SidebarFooter />
    </div>
  );
}
