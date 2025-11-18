import { prescriptions, doctors } from '../data/mock';

export default function Prescriptions(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Prescriptions</h1>
      <div className="space-y-4">
        {prescriptions.map(p => {
          const doc = doctors.find(d=>d.id===p.doctorId);
          return (
            <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">e‑Prescription • {doc?.name}</div>
                <div className="text-slate-300 text-sm">{p.createdAt}</div>
              </div>
              <div className="mt-3">
                {p.medicines.map((m, idx)=> (
                  <div key={idx} className="text-slate-200">• {m.name} — <span className="text-slate-400">{m.dosage}</span></div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm">Order Medicines</button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md text-sm">Download PDF</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
        <div className="text-slate-200">Upload Prescription</div>
        <input type="file" className="mt-2 block w-full text-slate-300 file:bg-blue-600 file:text-white file:border-0 file:px-3 file:py-2 file:rounded-md"/>
        <button className="mt-3 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Submit for Doctor Approval</button>
      </div>
    </div>
  );
}
