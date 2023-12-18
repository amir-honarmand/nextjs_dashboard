import GroupedAvatar from "@/components/avatars/GroupedAvatar";
import SeButton from "@/components/buttons/SecondaryButton";
import DailyMeetingIcon from "@/components/icons/DailyMeetingIcon";

export default function DailyMeeting() {
  return (
    <div className="flex flex-col max-w-[30rem] bg-bgWhite text-secondary pr-5 pl-10 rounded-xl">
      <div className="flex flex-row gap-1 items-center mt-4 mb-1">
        <DailyMeetingIcon />
        <p className="font-bold text-base">نشست های روزانه</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <p className="bg-bgGray text-sm rounded-xl px-3 py-1">۱۲ نفر</p>
        <p className="text-sm">۱۲:۲۱ ظهر</p>
      </div>
      <div className="my-6 flex justify-start">
        <GroupedAvatar />
      </div>
      <div className="mb-4">
        <SeButton label="وارد نشست شوید" onClick={() => {}} />
      </div>
    </div>
  );
}
