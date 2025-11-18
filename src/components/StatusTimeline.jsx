import { CheckCircle2, Clock, Truck, Package, Home } from 'lucide-react';

const stepsMap = [
  { key: 'placed', label: 'Order Placed', icon: Clock },
  { key: 'packed', label: 'Packed', icon: Package },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: Home }
];

export default function StatusTimeline({ status='placed' }){
  const currentIndex = stepsMap.findIndex(s=>s.key===status);
  return (
    <ol className="flex items-center w-full">
      {stepsMap.map((step, idx)=>{
        const Icon = step.icon;
        const done = idx <= currentIndex;
        return (
          <li key={step.key} className="flex-1 flex items-center">
            <div className={`flex items-center gap-2 ${done ? 'text-blue-400' : 'text-slate-400'}`}>
              {done ? <CheckCircle2 size={18}/> : <Icon size={18}/>}<span className="text-sm">{step.label}</span>
            </div>
            {idx < stepsMap.length-1 && <div className={`h-px flex-1 mx-2 ${done ? 'bg-blue-400/50' : 'bg-white/10'}`}></div>}
          </li>
        )
      })}
    </ol>
  );
}