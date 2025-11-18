import { useState } from 'react';
import { doctors } from '../data/mock';

export default function Consult(){
  const [type, setType] = useState('video');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctorId, setDoctorId] = useState(doctors[0]?.id);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Book a Consultation</h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Doctor</label>
            <select value={doctorId} onChange={e=>setDoctorId(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200">
              {doctors.map(d => <option key={d.id} value={d.id}>{d.name} • {d.specialization}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Type</label>
            <select value={type} onChange={e=>setType(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200">
              <option value="video">Video</option>
              <option value="chat">Chat</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Date</label>
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200"/>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Time</label>
            <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200"/>
          </div>
        </div>
        <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Continue to Payment</button>
      </div>

      <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
        <h2 className="text-white font-medium mb-2">Consultation Room (Demo)</h2>
        <div className="h-64 bg-slate-900/60 border border-white/10 rounded-md flex items-center justify-center text-slate-400">
          Video/Chat UI Preview
        </div>
      </div>
    </div>
  );
}
