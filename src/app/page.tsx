"use client";

import Grid from "@mui/material/Unstable_Grid2";

export default function Home() {
  return (
    <Grid container>
      <Grid md={3} sx={{ backgroundColor: "red", display: {xs: 'none', md: 'block'} }}>right</Grid>
      <Grid xs={12} md={9} sx={{ backgroundColor: "blue"}}>left</Grid>
    </Grid>
  );
}
