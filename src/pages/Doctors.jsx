import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/mock';

export default function Doctors(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Doctors</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {doctors.map(d => <DoctorCard key={d.id} doctor={d} onBook={()=>{}}/>) }
      </div>
    </div>
  );
}
