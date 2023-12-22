import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RButton from "@/components/buttons/RoundedButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UserModel } from "@/interfaces/user.interface";
import { isAuth, setLoading, setUserData } from "@/redux/reducers/userSlice";

export default function SidebarLayout({
  drawerWidth,
  children,
  handleDrawerToggle,
}: {
  children: React.ReactNode;
  drawerWidth: number;
  handleDrawerToggle: () => void;
}) {
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.user);

  // fetch user
  useEffect(()=>{
    if(user.isAuth) return;

    console.log('inja')

    const userData: UserModel = { userName: "amir011", id: "01" };

    if(userData){
      dispatch(isAuth(true));
      dispatch(setUserData(userData));
      console.log('inja 2')
    }else{
      dispatch(setLoading(false))
      console.log('inja 3')
    }

  }, [user]);
  
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
