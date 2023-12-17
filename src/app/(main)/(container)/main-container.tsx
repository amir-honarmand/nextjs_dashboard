import AppBarContent from "@/components/ui/AppbarContent";
import { Box, Toolbar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MainContent from "../contents/MainContent";
import ColumnContent from "../contents/ColumnContent";

export default function MainContainer({ drawerWidth }: { drawerWidth: number }) {
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
            <Grid xs={12} md={9}>
              <MainContent />
            </Grid>

            <Grid xs={12} md={3}>
              <ColumnContent />
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
