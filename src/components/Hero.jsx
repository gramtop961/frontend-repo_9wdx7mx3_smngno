import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldPlus, Pill, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero(){
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0"><Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }}/></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/80 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 text-blue-200/90 mb-3">
            <ShieldPlus className="text-blue-300" size={18}/>
            <span className="text-sm tracking-wide">Trusted digital healthcare platform</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow">
            Raksha: Your complete care for medicines and consultations
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            Order medicines, book verified doctors, receive e‑prescriptions, and track everything in one secure place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/medicines" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg font-medium transition">
              <Pill size={18}/> Browse Medicines <ArrowRight size={16}/>
            </Link>
            <Link to="/doctors" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-medium transition">
              <Stethoscope size={18}/> Book a Doctor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
