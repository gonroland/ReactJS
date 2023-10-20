import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListDetail from './components/ItemListDetail'
import ItemListContainer from './components/ItemListContainer'
import SobreWilson from './components/SobreWilson'
import CartItemsList from './components/CartItemsList'


const App = () => {
  const [cart, setCart] = useState([])
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/product" element={<ItemListContainer />} />
        <Route
          path="/product/:id"
          element={
            <ItemListDetail
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/sobre" element={<SobreWilson />} />
        <Route path="/carrito" element={<CartItemsList cartItems={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
