"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, CssBaseline, Drawer } from "@mui/material";
import DrawerUi from "@/components/ui/Drawer";
import SidebarFooter from "@/components/ui/SidebarFooter";

export default function SidebarContainer({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: {
  drawerWidth: number;
  mobileOpen: any;
  handleDrawerToggle: any;
}) {
  const spaceBetween = <div className="h-full"></div>;

  return (
    <Grid md={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="toolbox items"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            open
          >
            <DrawerUi />
            {spaceBetween}
            <SidebarFooter drawerWidth={drawerWidth} />
          </Drawer>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            <DrawerUi />
            {spaceBetween}
            <SidebarFooter drawerWidth={drawerWidth} />
          </Drawer>
        </Box>
      </Box>
    </Grid>
  );
}
