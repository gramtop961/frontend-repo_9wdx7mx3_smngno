import { consultations, prescriptions } from '../data/mock';

export default function DoctorDashboard(){
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Doctor Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Today's Appointments</div>
          <div className="text-slate-300 text-sm space-y-2">
            {consultations.map(c => (
              <div key={c.id} className="flex items-center justify-between">
                <div>{c.date} {c.time} • {c.patient}</div>
                <button className="px-2 py-1 rounded bg-blue-600 text-white text-xs">Start</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Recent e‑Prescriptions</div>
          <div className="text-slate-300 text-sm space-y-2">
            {prescriptions.map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <div>#{p.id} • {p.patient}</div>
                <button className="px-2 py-1 rounded bg-white/10 text-white text-xs">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
