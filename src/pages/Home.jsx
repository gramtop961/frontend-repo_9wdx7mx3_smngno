import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { categories, doctors } from '../data/mock';
import DoctorCard from '../components/DoctorCard';

export default function Home(){
  return (
    <div>
      <Hero/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-white mb-4">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-slate-300">
          {[
            {title:'Search & Order',desc:'Find medicines and add to cart. Upload prescription if needed.'},
            {title:'Consult Doctors',desc:'Book video or chat consultation with verified specialists.'},
            {title:'Track & Refill',desc:'Track delivery and manage prescriptions securely.'},
          ].map((s)=> (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-white font-medium">{s.title}</div>
              <div className="text-sm text-slate-300 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-white font-semibold">Top Categories</h3>
            <Link to="/medicines" className="text-blue-300 text-sm">View all</Link>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map(c => (
              <Link to={`/medicines?category=${encodeURIComponent(c)}`} key={c} className="bg-white/5 border border-white/10 rounded-lg px-4 py-6 text-center text-slate-200 hover:border-blue-500/40">
                {c}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-white font-semibold">Featured Doctors</h3>
            <Link to="/doctors" className="text-blue-300 text-sm">See more</Link>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {doctors.map(doc => <DoctorCard key={doc.id} doctor={doc} onBook={()=>{}}/>) }
          </div>
        </div>
      </section>
    </div>
  );
}
