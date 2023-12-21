import LiButton from "@/components/buttons/ListItemButton";
import TButton from "@/components/buttons/TertiaryButton";
import PlusIcon from "@/components/icons/PlusIcon";

export default function TeamMember() {
  return (
    <div
      className="box-in-column p-4 bg-bgWhite text-secondary"
    >
      <h5 className="font-bold text-base">اعضای تیم</h5>
      <div className="flex flex-col items-start mt-4 gap-2">
        <LiButton title="امیر هنرمند زاده" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
        <LiButton title="محسن مقدم" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
        <LiButton title="بنیامین مشکور زاده" subTitle="مدیر پروژه" imageSrc="" onClick={() => {}} />
      </div>
      <div className="mt-4">
        <TButton label="اضافه کردن کاربر" onClick={() => {}}>
          <PlusIcon />
        </TButton>
      </div>
    </div>
  );
}
