export default function Footer(){
  return (
    <footer className="bg-slate-900/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-300 text-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Raksha</h4>
            <p className="text-slate-400">Trusted, minimal and secure healthcare platform.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li>Medicine Ordering</li>
              <li>Online Consultations</li>
              <li>E‑Prescriptions</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-slate-500">© {new Date().getFullYear()} Raksha. All rights reserved.</div>
      </div>
    </footer>
  );
}
