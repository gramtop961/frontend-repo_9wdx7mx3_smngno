export default function Checkout(){
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl text-white font-semibold mb-4">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-3">Delivery Details</div>
          <input placeholder="Full Name" className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 mb-2"/>
          <input placeholder="Address" className="w-full bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 mb-2"/>
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="City" className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200"/>
            <input placeholder="Pincode" className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-slate-200"/>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white font-medium mb-3">Payment</div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-slate-200"><input type="radio" name="pay" defaultChecked/> UPI</label>
            <label className="flex items-center gap-2 text-slate-200"><input type="radio" name="pay"/> Card</label>
            <label className="flex items-center gap-2 text-slate-200"><input type="radio" name="pay"/> Cash on Delivery</label>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md w-full">Place Order</button>
        </div>
      </div>
    </div>
  );
}
