import { Pill, Plus } from 'lucide-react';

export default function MedicineCard({ item, onAdd }){
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/40 transition">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white">
          <Pill />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white">{item.name}</div>
          <div className="text-sm text-slate-300">{item.category} {item.prescription ? '• Rx Required' : '• OTC'}</div>
          <div className="mt-2 text-blue-200">₹{item.price}</div>
          <button onClick={()=>onAdd?.(item)} className="mt-3 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm">
            <Plus size={16}/> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
