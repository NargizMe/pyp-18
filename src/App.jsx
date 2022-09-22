import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Dashboard from "./pages/dashBoard/Dashboard";
import ProductList from "./pages/dashBoard/ProductList.jsx";
import Home from "./pages/web/Home.jsx";
import Contact from "./pages/web/Contact.jsx";
import About from "./pages/web/About.jsx";

function App() {

  return (
      <div className="App">
          <Routes>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route
                  path="/dashboard/product-list"
                  element={<ProductList />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </div>
  )
}

export default App;