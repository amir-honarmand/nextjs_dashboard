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
import { destroyCookie, setCookie } from "nookies";
import { COOKIES_PATH, DRAWER_WIDTH } from "@/constants/variables";
import { apiService } from "@/services/api";
import { SnackbarProvider } from "notistack";

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.user);

  // fetch user
  useEffect(() => {
    if (user.isAuth) return;

    (async () => {
      const {data, status} = await apiService.fetchUser();

      if (data) {
        // destroyCookie(null, 'token');
        setCookie(null, 'token', data.token, {path: COOKIES_PATH, maxAge: data.maxAge})
        // dispatch(isAuth(true));
        // dispatch(setUserData(getUser));
      } else {
        // dispatch(setLoading(false));
      }
    })();
  }, [user]);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SnackbarProvider
      preventDuplicate={true}
      dense={true}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      maxSnack={5}
    >
      <Grid container sx={{ minHeight: "100vh" }}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <SidebarLayout drawerWidth={DRAWER_WIDTH} handleDrawerToggle={handleDrawerToggle}>
            <SidebarContainer
              drawerWidth={DRAWER_WIDTH}
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
          </SidebarLayout>
          <MainLayout drawerWidth={DRAWER_WIDTH}>{children}</MainLayout>
        </Box>
      </Grid>
    </SnackbarProvider>
  );
}
