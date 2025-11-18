import { medicines, doctors, orders } from '../data/mock';

export default function Admin(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Admin Panel</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Medicines</div>
          <div className="text-slate-300 text-sm space-y-2">
            {medicines.map(m => <div key={m.id} className="flex items-center justify-between"><div>{m.name}</div><button className="px-2 py-1 rounded bg-white/10 text-white text-xs">Edit</button></div>)}
          </div>
          <button className="mt-3 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm w-full">Add Medicine</button>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Doctors</div>
          <div className="text-slate-300 text-sm space-y-2">
            {doctors.map(d => <div key={d.id} className="flex items-center justify-between"><div>{d.name}</div><button className="px-2 py-1 rounded bg-white/10 text-white text-xs">Edit</button></div>)}
          </div>
          <button className="mt-3 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm w-full">Add Doctor</button>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-2">Orders</div>
          <div className="text-slate-300 text-sm space-y-2">
            {orders.map(o => <div key={o.id} className="flex items-center justify-between"><div>#{o.id}</div><button className="px-2 py-1 rounded bg-white/10 text-white text-xs">View</button></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
