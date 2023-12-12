"use client";
import Grid from "@mui/material/Unstable_Grid2";
import mainStyled from "./main.module.scss";

export default function Main() {
  return (
    <div className={mainStyled.gooz}>
      <Grid container>
        <Grid md={3} sx={{ display: { xs: "none", md: "block" } }}>
          right
        </Grid>
        <Grid xs={12} md={9} sx={{ backgroundColor: "blue" }}>
          left
        </Grid>
      </Grid>
    </div>
  );
}
