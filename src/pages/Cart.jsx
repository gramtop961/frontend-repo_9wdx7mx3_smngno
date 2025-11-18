import { medicines } from '../data/mock';

export default function Cart(){
  const cartItems = [ { id:'m1', qty:2 }, { id:'m6', qty:1 } ];
  const items = cartItems.map(ci => ({ ...medicines.find(m=>m.id===ci.id), qty: ci.qty }));
  const total = items.reduce((s,i)=> s + i.price * i.qty, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Cart</h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        {items.map(i => (
          <div key={i.id} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
            <div>
              <div className="text-white">{i.name}</div>
              <div className="text-slate-400 text-sm">Qty: {i.qty}</div>
            </div>
            <div className="text-blue-200">₹{i.price * i.qty}</div>
          </div>
        ))}
        <div className="flex items-center justify-between mt-4">
          <div className="text-slate-300">Total</div>
          <div className="text-white font-semibold">₹{total}</div>
        </div>
        <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">Proceed to Checkout</button>
      </div>
    </div>
  );
}
