import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Medicines from './pages/Medicines';
import Doctors from './pages/Doctors';
import Consult from './pages/Consult';
import Prescriptions from './pages/Prescriptions';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Dashboard from './pages/Dashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Product from './pages/Product';

function Layout({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/medicines" element={<Medicines/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/consult" element={<Consult/>}/>
        <Route path="/prescriptions" element={<Prescriptions/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/doctor" element={<DoctorDashboard/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
