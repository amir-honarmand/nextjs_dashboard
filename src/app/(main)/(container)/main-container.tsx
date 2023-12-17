import SBox from "@/components/cards/Box";
import AppBarContent from "@/components/ui/AppbarContent";
import { Box, Toolbar } from "@mui/material";
import TotalEarningIcon from "@/components/icons/TotalEarningIcon";
import AverageEarningIcon from "@/components/icons/AverageEarningIcon";
import ConversationRateIcon from "@/components/icons/ConversationRateIcon";
import BoxBgImage from "@/assets/images/box-bg.png";
import PButton from "@/components/buttons/PrimaryButton";
import Grid from "@mui/material/Unstable_Grid2";

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
              <section>
                <div className="flex gap-5 md:flex-wrap xs:flex-col md:flex-row">
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
              </section>
            </Grid>

            {/* column */}
            <Grid xs={12} md={3}>
              <section className="flex flex-col xs:mt-10 md:mr-10 md:mt-0">
                <div
                  style={{
                    backgroundImage: `url(${BoxBgImage.src})`,
                  }}
                  className="flex flex-col bg-cover bg-center bg-no-repeat 
              text-bgWhite pr-5 pl-10 rounded-xl"
                >
                  <p className="font-bold text-base py-4">ارتقاء به نسخه حرفه ای</p>
                  <div className="flex flex-row items-center">
                    <p className="text-lg font-bold">۵۶,۰۰۰ تومان</p>
                    <p> / در ماه</p>
                  </div>
                  <p>۵۶,۰۰۰ تومان سالانه</p>
                  <div className="py-4">
                    <PButton onClick={() => {}} label="ارتقاء دهید" />
                  </div>
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
