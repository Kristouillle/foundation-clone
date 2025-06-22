import ApplicationProcess from "./(section)/application-process";
import ApplyNow from "./(section)/apply-now";
import FocusArea from "./(section)/focus-area";
import Landing from "./(section)/landing";
import MeasuringImpact from "./(section)/measuring-impact";
import Mission from "./(section)/mission";
import WhoCanApply from "./(section)/who-can-apply";


export default function Page() {
  return (
    <main className="flex min-h-screen bg-[#FFF1D0] flex-col items-center justify-between">
      <Landing />
      <Mission />
      <WhoCanApply />
      <FocusArea />
      <ApplicationProcess />
      <MeasuringImpact />
      <ApplyNow />
    </main>
  );
}
