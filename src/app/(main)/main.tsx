"use client";
import Grid from "@mui/material/Unstable_Grid2";
import SidebarContainer from "./(container)/sidebar-container";
import MainContainer from "./(container)/main-container";
import { useState } from "react";

const drawerWidth = 150;

export default function Main() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container>
      <SidebarContainer
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MainContainer
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Grid>
  );
}
