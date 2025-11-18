import { useParams } from 'react-router-dom';
import { medicines } from '../data/mock';
import MedicineCard from '../components/MedicineCard';

export default function Product(){
  const { id } = useParams();
  const item = medicines.find(m=>m.id===id);
  if(!item){
    return <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">Product not found.</div>
  }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">{item.name}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="w-full h-52 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400"></div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-slate-300">Category: {item.category}</div>
          <div className="text-slate-300">Type: {item.prescription ? 'Prescription Required' : 'OTC'}</div>
          <div className="text-white text-xl mt-3">₹{item.price}</div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-white font-medium mb-2">Related</div>
        <div className="grid md:grid-cols-3 gap-4">
          {medicines.filter(m => m.id!==item.id).slice(0,3).map(m => (
            <MedicineCard key={m.id} item={m} onAdd={()=>{}}/>
          ))}
        </div>
      </div>
    </div>
  );
}
