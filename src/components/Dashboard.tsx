import AddNewRecord from "@/app/api/records/components/AddNewRecord";
import AverageSleep from "@/app/api/records/components/AverageSleep";
import BestWorstSleep from "@/app/api/records/components/BestWorst";
import RecordChart from "@/app/api/records/components/RecordChart";
import RecordHistory from "@/app/api/records/components/RecordHistory";
import AuthorizedUser from "@/app/api/users/components/AuthorizedUser";

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
