import BoxBgImage from "@/assets/images/box-bg.png";
import PButton from "@/components/buttons/PrimaryButton";
import DailyMeetingIcon from "@/components/icons/DailyMeetingIcon";

export default function ColumnContent() {
  return (
    <section className="flex flex-col gap-5 xs:mt-10 md:mr-10 md:mt-0">
      {/* upgrade box */}
      <div
        style={{
          backgroundImage: `url(${BoxBgImage.src})`,
        }}
        className="flex flex-col max-w-[30rem] bg-cover bg-center bg-no-repeat 
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

      {/* Daily Meeting */}
      <div className="flex flex-col max-w-[30rem] bg-bgWhite text-secondary pr-5 pl-10 rounded-xl">
        <div className="flex flex-row gap-1 items-center mt-4 mb-1">
          <DailyMeetingIcon />
          <p className="font-bold text-base">نشست های روزانه</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <p className="bg-bgGray text-sm rounded-xl px-3 py-1">۱۲ نفر</p>
          <p className="text-sm">۱۲:۲۱ ظهر</p>
        </div>
      </div>
    </section>
  );
}
