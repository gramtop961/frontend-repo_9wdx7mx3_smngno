import { useMemo, useState } from 'react';
import MedicineCard from '../components/MedicineCard';
import { medicines, categories } from '../data/mock';

export default function Medicines(){
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [rx, setRx] = useState('All');

  const filtered = useMemo(()=>{
    return medicines.filter(m =>
      (cat === 'All' || m.category === cat) &&
      (rx === 'All' || (rx === 'Rx' ? m.prescription : !m.prescription)) &&
      (m.name.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, cat, rx]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Medicines</h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <div className="grid sm:grid-cols-4 gap-3">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search medicine..." className="col-span-2 bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500"/>
          <select value={cat} onChange={e=>setCat(e.target.value)} className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200">
            <option>All</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={rx} onChange={e=>setRx(e.target.value)} className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200">
            <option>All</option>
            <option>OTC</option>
            <option>Rx</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(item => <MedicineCard key={item.id} item={item} onAdd={()=>{}}/>)}
      </div>
    </div>
  );
}
