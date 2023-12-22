"use client";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "@/layouts/MainLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import SidebarContainer from "@/app/(main)/container/sidebar-container";

const drawerWidth = 240;

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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
          <MainLayout drawerWidth={drawerWidth}>{children}</MainLayout>
        </Box>
      </Grid>
  );
}
