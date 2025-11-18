import { Star, Stethoscope } from 'lucide-react';

export default function DoctorCard({ doctor, onBook }){
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/40 transition">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-semibold">
          {doctor.name.split(' ').map(p=>p[0]).join('')}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white">{doctor.name}</div>
          <div className="text-sm text-slate-300">{doctor.specialization} • {doctor.experience} yrs</div>
          <div className="flex items-center gap-2 text-amber-400 mt-1 text-sm">
            <Star size={14} fill="currentColor"/><span>{doctor.rating}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">₹{doctor.fees} fee</span>
          </div>
        </div>
        <button onClick={()=>onBook?.(doctor)} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm">
          <Stethoscope size={16}/> Book
        </button>
      </div>
    </div>
  );
}
