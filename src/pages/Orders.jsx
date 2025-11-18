import { orders } from '../data/mock';
import StatusTimeline from '../components/StatusTimeline';

export default function Orders(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Your Orders</h1>
      <div className="space-y-4">
        {orders.map(o => (
          <div key={o.id} className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-medium">Order #{o.id}</div>
              <div className="text-slate-300 text-sm">Placed on {o.placedAt}</div>
            </div>
            <StatusTimeline status={o.status}/>
            <div className="mt-4 text-white">Total: ₹{o.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
