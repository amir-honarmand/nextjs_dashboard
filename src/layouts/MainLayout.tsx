import ColumnContent from "@/app/(main)/contents/ColumnContent";
import AppBarContent from "@/components/ui/AppbarContent";
import { Box, Toolbar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

export default function MainLayout({
  drawerWidth,
  children,
}: {
  drawerWidth: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBarContent drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: "2rem",
          width: { xs: "100vw", lg: `calc(100vw - ${drawerWidth}px)` },
          backgroundColor: "info.main",
        }}
      >
        <Toolbar sx={{ mb: "4rem" }} />

        <div>
          <Grid container>
            <Grid xs={12} lg={8}>
              {children}
            </Grid>

            <Grid xs={12} lg={4}>
              <ColumnContent />
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
