import { AppBar, Toolbar } from "@mui/material";
import AButton from "../buttons/AppbarButton";
import { IoIosNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";

export default function AppBarContent({drawerWidth}: {drawerWidth: number}){
  return(
    <AppBar
        position="fixed"
        style={{
          boxShadow: "none",
        }}
        sx={{
          backgroundColor: 'info.main',
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          pb: '.5rem',
          zIndex: 1,
        }}
      >
        <Toolbar sx={{ mt: { xs: "3.5rem", lg: "3rem" }, mx: ".5rem" }}>
          {/* header title */}
          <div className="flex flex-col flex-grow gap-1">
            <h1 className="font-bold text-2xl">داشبورد</h1>
            <h6>۵ فروردین ۱۳۷۱</h6>
          </div>
          {/* header buttons */}
          <div className="flex flex-row gap-1">
            <AButton onClick={()=>{}}><IoIosNotifications/></AButton>
            <AButton onClick={()=>{}}><MdMessage/></AButton>
          </div>
        </Toolbar>
      </AppBar>
  )
}