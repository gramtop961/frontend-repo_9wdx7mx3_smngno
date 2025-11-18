import { consultations, prescriptions, orders } from '../data/mock';

export default function Dashboard(){
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Patient Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Upcoming Consultations</div>
          <div className="text-slate-300 text-sm space-y-2">
            {consultations.map(c => (
              <div key={c.id} className="flex items-center justify-between">
                <div>{c.date} {c.time}</div>
                <div className="px-2 py-1 rounded bg-white/10 text-white text-xs capitalize">{c.type}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Recent Prescriptions</div>
          <div className="text-slate-300 text-sm space-y-2">
            {prescriptions.map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <div>#{p.id}</div>
                <div>{p.createdAt}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Orders</div>
          <div className="text-slate-300 text-sm space-y-2">
            {orders.map(o => (
              <div key={o.id} className="flex items-center justify-between">
                <div>#{o.id}</div>
                <div className="text-white">₹{o.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
