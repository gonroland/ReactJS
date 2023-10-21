import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListDetail from './components/ItemListDetail'
import ItemListContainer from './components/ItemListContainer'
import SobreWilson from './components/SobreWilson'
import CartItemsList from './components/CartItemsList'
import { CartProvider } from './components/CartContext'
import Checkout from './components/Checkout'


const App = () => {
  const [cart, setCart] = useState([])
  
  return (
    <Router>
    <CartProvider>
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
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
