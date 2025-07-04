import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Imported from './Navbar/Components/Imported';
import Cards from './Navbar/Components/Cards';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CustomNavbar from './Navbar/Components/CustomNavbar';
import Freshfruits from './Navbar/Components/Freshfruits';
import Imageclick from './Navbar/Components/Imageclick';
import Dryfruits from './Navbar/Components/Dryfruits';
import AddtoCart from './Navbar/Components/AddtoCart';
import Localfruits from './Navbar/Components/LocalFruits';
import Footer from './Navbar/Components/Footer';
import Login from './Navbar/Components/Login';
import Registration from './Navbar/Components/Registration'
import { BsDash } from 'react-icons/bs';
import Dashboard from './Dashboard/Dashboard';
import AdminAdditems from './Dashboard/AdminAdditems';
import UpdateItem from './Dashboard/UpdateItem';

function App() {
  const [cartCount, setCartCount] = useState(0);
  

const handleAddToCart = () => {
  console.log("Item added to cart");
  setCartCount(prev => prev + 1);

};

  return (
    <div className="App">
      
   <Router>
       <CustomNavbar cartCount={cartCount} setCartCount={setCartCount} />      
    <Routes>
        {/* <Route path="/" element={<Cards />} />
      <Route path="/imported" element={<Imported onAddToCartGlobal={handleAddToCart} />} />
      <Route path="/freshfruits" element= {<Freshfruits />} />
      <Route path="/imageclick" element={<Imageclick onAddToCartGlobal={handleAddToCart}/>} />
      <Route path='/dryfruits' element={<Dryfruits />} />
      <Route path="/localfruits" element={<Localfruits />} />
      <Route path="/cart" element={<AddtoCart />}  />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/additems" element={<Dashboard />} /> */}

      <Route path="/" element={<AdminAdditems  />} />
      <Route path="/edit/:id" element={<UpdateItem  />} />
      
    </Routes>
    {/* <Footer />
    <Dashboard /> */}
    
   </Router>
   
    </div>
  );
}

export default App;
