import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RButton from "@/components/buttons/RoundedButton";

export default function SidebarLayout({
  drawerWidth,
  children,
  handleDrawerToggle,
}: {
  children: React.ReactNode;
  drawerWidth: number;
  handleDrawerToggle: () => void;
}) {
  return (
    <div className="bg-bgGray">
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          position: "fixed",
          left: 5,
          top: 5,
          zIndex: 99,
        }}
      >
        <RButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </RButton>
      </Box>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="nav drawer"
      >
        {children}
      </Box>
    </div>
  );
}
