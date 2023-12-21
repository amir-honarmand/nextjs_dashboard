import { Drawer } from "@mui/material";
import DrawerContent from "@/components/ui/Drawer";

export default function SidebarContainer({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const paperStyle = {
    boxSizing: "border-box",
    width: drawerWidth,
    backgroundColor: "common.white",
  };

  return (
    <>
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
    </>
  );
}
