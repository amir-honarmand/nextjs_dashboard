"use client";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarContainer from "./(container)/sidebar-container";
import MainContainer from "./(container)/main-container";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function Main() {
  

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      {/* <Divider /> */}
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
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <Avatar /> : <Avatar />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  
  return (
      <Grid container>
        <SidebarContainer drawer={drawer}/>
        <MainContainer drawer={drawer}/>
      </Grid>
  );
}
