'use client'
import TotalEarningIcon from "@/components/icons/TotalEarningIcon";
import AverageEarningIcon from "@/components/icons/AverageEarningIcon";
import ConversationRateIcon from "@/components/icons/ConversationRateIcon";
import SBox from "@/components/cards/Box";
import PButton from "@/components/buttons/PrimaryButton";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function MainContent() {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  return (
    <section className="flex flex-col gap-10">
      {/* boxes */}
      <div className="flex gap-5 md:flex-wrap xs:flex-col md:flex-row">
        <SBox desc="ماه جاری" amount="۲,۳۴۰,۰۰۰ تومان" title="درآمد کل" bgColor="bg-purple-300">
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

      {/* Top Store */}
      <div className="flex flex-col p-4 bg-bgWhite rounded-xl">
        <div className="flex flex-row px-2 justify-between items-center mb-4">
          <h5 className="font-bold text-lg">فروشگاه برتر</h5>
          <PButton label="اشتراک گذاری" onClick={() => {}} />
        </div>

        <TableContainer component='div'>
          <Table sx={{ minWidth: 650 }} aria-label="top store table">
            <TableHead>
              <TableRow>
                <TableCell>نام فروشگاه</TableCell>
                <TableCell align="right">آدرس</TableCell>
                <TableCell align="right">فروش</TableCell>
                <TableCell align="right">مبلغ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}
