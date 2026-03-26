export default function Portal() {
  return (
    <div className="pt-24 flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-[#122A36] p-4">
        <h2 className="mb-6">My Portal</h2>
        <ul className="space-y-3 text-sm">
          <li>Overview</li>
          <li>Scheduling</li>
          <li>Documents</li>
          <li>Purchases</li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-[#122A36] p-6 rounded-xl">Membership</div>
          <div className="bg-[#122A36] p-6 rounded-xl">Appointments</div>
          <div className="bg-[#122A36] p-6 rounded-xl">Progress</div>
        </div>
      </div>
    </div>
  );
}