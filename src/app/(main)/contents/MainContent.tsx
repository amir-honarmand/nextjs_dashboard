import TotalEarningIcon from "@/components/icons/TotalEarningIcon";
import AverageEarningIcon from "@/components/icons/AverageEarningIcon";
import ConversationRateIcon from "@/components/icons/ConversationRateIcon";
import SBox from "@/components/cards/Box";
import PButton from "@/components/buttons/PrimaryButton";

export default function MainContent() {
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
        <div className="flex flex-row justify-between">
          <h5 className="font-bold text-lg">فروشگاه برتر</h5>
          <PButton label="اشتراک گذاری" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
}
