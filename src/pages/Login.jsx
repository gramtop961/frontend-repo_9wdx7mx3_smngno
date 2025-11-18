import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if(role==='doctor') navigate('/doctor');
    else if(role==='admin') navigate('/admin');
    else navigate('/dashboard');
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Login</h1>
      <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-5">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Role</label>
          <select value={role} onChange={e=>setRole(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mt-3">
          <label className="block text-sm text-slate-300 mb-1">Email</label>
          <input type="email" required className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200"/>
        </div>
        <div className="mt-3">
          <label className="block text-sm text-slate-300 mb-1">Password</label>
          <input type="password" required className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200"/>
        </div>
        <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md w-full">Sign In</button>
      </form>
    </div>
  );
}
