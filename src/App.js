import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import DrinkMenu from './components/DrinkMenu';
import SalonInfo from './components/SalonInfo';
import History from './components/History'; // <-- Nový import
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/drink-menu" element={<DrinkMenu />} />
          <Route path="/salon" element={<SalonInfo />} />
          <Route path="/historie" element={<History />} /> {/* <-- Nová cesta */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;