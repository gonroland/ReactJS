import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemListDetail from './components/ItemListDetail'
import SobreWilson from './components/SobreWilson'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemListDetail />} />
        <Route path="/sobre" element={<SobreWilson />} />
      </Routes>
    </Router>
  );
};

export default App;
