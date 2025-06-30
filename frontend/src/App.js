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

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };
  return (
    <div className="App">
      <button onClick={() => setCartCount(prev => prev + 1)}>Test Add to Cart</button>


   <Router>
       <CustomNavbar cartCount={cartCount} />      
    <Routes>
        <Route path="/" element={<Cards />} />
      <Route path="/imported" element={<Imported onAddToCartGlobal={handleAddToCart} />} />
      <Route path="/freshfruits" element= {<Freshfruits />} />
      <Route path="/imageclick" element={<Imageclick />} />
      <Route path='/dryfruits' element={<Dryfruits />} />
      <Route path="/localfruits" element={<Localfruits />} />
      <Route path="/cart" element={<AddtoCart />}  />
     

    </Routes>
   
   </Router>
    </div>
  );
}

export default App;
