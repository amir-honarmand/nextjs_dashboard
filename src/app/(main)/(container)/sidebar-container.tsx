import { Box, Drawer } from "@mui/material";
import DrawerContent from "@/components/ui/Drawer";
import SButton from "@/components/buttons/Button";
import MenuIcon from "@mui/icons-material/Menu";

export default function SidebarContainer({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: {
  drawerWidth: number;
  mobileOpen: any;
  handleDrawerToggle: any;
}) {
  const paperStyle = { boxSizing: "border-box", width: drawerWidth, backgroundColor: "common.white" };

  return (
    <div className="bg-bgGray">
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          position: "fixed",
          left: 5,
          top: 5,
          zIndex: 1,
        }}
      >
        <SButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </SButton>
      </Box>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="nav drawer"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": paperStyle,
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": paperStyle,
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
    </div>
  );
}
