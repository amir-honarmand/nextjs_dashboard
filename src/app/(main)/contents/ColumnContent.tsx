import DailyMeeting from "./DailyMeeting";
import TeamMember from "./TeamMember";
import UpgradeBox from "./UpgradeBox";

export default function ColumnContent() {
  return (
    <section className="flex flex-row flex-wrap gap-5 xs:mt-10 lg:mt-0 lg:mr-10">
      <UpgradeBox />
      <DailyMeeting />
      <TeamMember />
    </section>
  );
}
