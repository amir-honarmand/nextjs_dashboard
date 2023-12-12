"use client";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  CssBaseline,
  Drawer,
} from "@mui/material";

const drawerWidth = 240;

export default function SidebarContainer({drawer}: {drawer: JSX.Element}) {
  return (
    <Grid md={3} sx={{ display: { xs: "none", md: "block" } }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        
      </Box>
      {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {[
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ].map((item, index) => (
            <Typography key={index}>hello</Typography>
          ))}
        </Box> */}
    </Grid>
  );
}
