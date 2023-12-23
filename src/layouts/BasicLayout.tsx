"use client";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "@/layouts/MainLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import SidebarContainer from "@/app/(main)/container/sidebar-container";
import { useDispatch, useSelector } from "react-redux";
import { UserModel } from "@/interfaces/user.interface";
import { isAuth, setLoading, setUserData } from "@/redux/reducers/userSlice";

const drawerWidth = 240;

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.user);

  // fetch user
  useEffect(()=>{
    if(user.isAuth) return;

    console.log('inja')

    const userData: UserModel = { userName: "amir011", id: "01" };

    if(userData){
      dispatch(isAuth(true));
      dispatch(setUserData(userData));
      console.log('inja 2')
    }else{
      dispatch(setLoading(false))
      console.log('inja 3')
    }

  }, [user]);
  
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
