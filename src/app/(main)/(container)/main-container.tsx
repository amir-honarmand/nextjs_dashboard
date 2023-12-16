import SBox from "@/components/cards/Box";
import AppBarContent from "@/components/ui/AppbarContent";
import { Box, Toolbar } from "@mui/material";
import TotalEarningIcon from "@/components/icons/TotalEarningIcon";
import AverageEarningIcon from "@/components/icons/AverageEarningIcon";
import ConversationRateIcon from "@/components/icons/ConversationRateIcon";

export default function MainContainer({ drawerWidth }: { drawerWidth: number }) {
  return (
    <>
      <AppBarContent drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: "2rem",
          width: { xs: "100%", lg: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "info.main",
        }}
      >
        <Toolbar sx={{ mb: "4rem" }} />
        <section className="flex xs:flex-col lg:flex-row gap-4">
          <section>
            <div className="flex gap-5">
              <SBox
                desc="ماه جاری"
                amount="۲,۳۴۰,۰۰۰ تومان"
                title="درآمد کل"
                bgColor="bg-purple-300"
              >
                <TotalEarningIcon />
              </SBox>
              <SBox
                desc="درآمد روزانه این ماه"
                amount="۳,۳۴۰,۰۰۰ تومان"
                title="میانگین درآمد"
                bgColor="bg-blue-300"
              >
                <AverageEarningIcon />
              </SBox>
              <SBox
                desc="۴% بیشتر از ماه قبل"
                amount="۴۳۴,۰۰۰ تومان"
                title="نرخ تبدیل"
                bgColor="bg-green-300"
              >
                <ConversationRateIcon />
              </SBox>
            </div>
            <div></div>
            <div></div>
          </section>

          {/* column */}
          <section className=" bg-red-700">hello 2</section>
        </section>
      </Box>
    </>
  );
}
