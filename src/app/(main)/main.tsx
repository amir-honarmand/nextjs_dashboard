"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SidebarContainer from "./container/sidebar-container";
import MainContainer from "./container/main-container";

const drawerWidth = 240;

export default function Main() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container sx={{minHeight: '100vh'}}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SidebarContainer
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <MainContainer drawerWidth={drawerWidth} />
      </Box>
    </Grid>
  );
}
