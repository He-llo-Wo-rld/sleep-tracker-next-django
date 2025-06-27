import AuthorizedUser from "@/components/AuthorizedUser";
import AddNewRecord from "@/components/AddNewRecord";
import RecordChart from "@/components/RecordChart";
import AverageSleep from "@/components/AverageSleep";
import BestWorstSleep from "@/components/BestWorst";
import RecordHistory from "@/components/RecordHistory";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <AuthorizedUser />
          <AddNewRecord />
        </div>
        <div className="space-y-6">
          <RecordChart />
          <AverageSleep />
          <BestWorstSleep />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <RecordHistory />
      </div>
    </main>
  );
}
