import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer mensaje={<><div style={{ textAlign: 'center', fontSize: '38px' }}>¡Bienvenido a nuestra tienda online!</div><div style={{ textAlign: 'center', fontSize: '18px', marginTop: '10px', fontWeight: 'normal' }}>Explore nuestros servicios y elija el que mejor se adapte a sus necesidades.</div></>} />} />
      <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default App;