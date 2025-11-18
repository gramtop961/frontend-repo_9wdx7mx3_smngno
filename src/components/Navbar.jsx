import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User, Stethoscope, Pill, ShieldPlus, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ cartCount = 0, user }) {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-blue-500/20'}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg">
              <ShieldPlus className="text-blue-400" />
              <span>Raksha</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1 ml-6">
              <NavLink to="/medicines" className={linkClass}><div className="flex items-center gap-2"><Pill size={16}/> Medicines</div></NavLink>
              <NavLink to="/doctors" className={linkClass}><div className="flex items-center gap-2"><Stethoscope size={16}/> Doctors</div></NavLink>
              <NavLink to="/consult" className={linkClass}>Consult</NavLink>
              <NavLink to="/prescriptions" className={linkClass}>Prescriptions</NavLink>
              <NavLink to="/orders" className={linkClass}>Orders</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <NavLink to={user.role === 'doctor' ? '/doctor' : user.role === 'admin' ? '/admin' : '/dashboard'} className={linkClass}>
                <div className="flex items-center gap-2"><User size={16}/> {user.name}</div>
              </NavLink>
            ) : (
              <NavLink to="/login" className={linkClass}><div className="flex items-center gap-2"><User size={16}/> Login</div></NavLink>
            )}
            <NavLink to="/cart" className="relative px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-500/20">
              <ShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] bg-blue-600 text-white rounded-full px-1.5 py-0.5">{cartCount}</span>
              )}
            </NavLink>
            <button className="md:hidden text-slate-200" onClick={()=>setOpen(!open)}><Menu/></button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-3 space-y-2">
            <NavLink onClick={()=>setOpen(false)} to="/medicines" className="block px-3 py-2 text-slate-200 hover:bg-blue-500/20 rounded">Medicines</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/doctors" className="block px-3 py-2 text-slate-200 hover:bg-blue-500/20 rounded">Doctors</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/consult" className="block px-3 py-2 text-slate-200 hover:bg-blue-500/20 rounded">Consult</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/prescriptions" className="block px-3 py-2 text-slate-200 hover:bg-blue-500/20 rounded">Prescriptions</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/orders" className="block px-3 py-2 text-slate-200 hover:bg-blue-500/20 rounded">Orders</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
