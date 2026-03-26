export default function CRM() {
  return (
    <div className="pt-24 flex">
      <div className="w-64 bg-[#0A2E43] p-4 h-screen">
        <h2 className="mb-6">CRM</h2>
        <ul className="space-y-2 text-sm">
          <li>Dashboard</li>
          <li>Clients</li>
          <li>Scheduling</li>
          <li>Inventory</li>
        </ul>
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-3xl">CRM Dashboard</h1>

        <div className="grid grid-cols-4 gap-6 mt-6">
          <div className="bg-[#122A36] p-6 rounded-xl">Revenue</div>
          <div className="bg-[#122A36] p-6 rounded-xl">Clients</div>
          <div className="bg-[#122A36] p-6 rounded-xl">Sales</div>
          <div className="bg-[#122A36] p-6 rounded-xl">Growth</div>
        </div>
      </div>
    </div>
  );
}