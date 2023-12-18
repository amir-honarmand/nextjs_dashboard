import LiButton from "@/components/buttons/ListItemButton";
import DailyMeeting from "./DailyMeeting";
import UpgradeBox from "./UpgradeBox";
import TButton from "@/components/buttons/TertiaryButton";
import PlusIcon from "@/components/icons/PlusIcon";

export default function ColumnContent() {
  return (
    <section className="flex flex-col gap-5 max-w-[30rem] xs:mt-10 lg:mt-0 lg:mr-10">
      <UpgradeBox />
      <DailyMeeting />

      <div className="flex flex-col p-4 bg-bgWhite text-secondary pr-5 pl-10 rounded-xl">
        <h5 className="font-bold text-base">اعضای تیم</h5>
        <div className="flex flex-col items-start mt-4 gap-2">
          <LiButton title="امیر هنرمند زاده" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
          <LiButton title="امیر هنرمند زاده" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
          <LiButton title="امیر هنرمند زاده" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
          <LiButton title="امیر هنرمند زاده" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
        </div>
        <div className="mt-4">
          <TButton label="اضافه کردن کاربر" onClick={()=>{}}>
            <PlusIcon/>
          </TButton>
        </div>
      </div>
    </section>
  );
}
