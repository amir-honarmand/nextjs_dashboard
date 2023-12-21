"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SidebarContainer from "./container/sidebar-container";
import MainContainer from "./container/main-container";
import MainLayout from "@/layouts/MainLayout";
import SidebarLayout from "@/layouts/SidebarLayout";

const drawerWidth = 240;

export default function Main() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SidebarLayout drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}>
          <SidebarContainer
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </SidebarLayout>
        <MainLayout drawerWidth={drawerWidth}>
          <MainContainer />
        </MainLayout>
      </Box>
    </Grid>
  );
}
