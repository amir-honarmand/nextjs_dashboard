import BoxBgImage from "@/assets/images/box-bg.png";
import PButton from "@/components/buttons/PrimaryButton";

export default function ColumnContent() {
  return (
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
  );
}
