import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/index.tsx'
import Inicio from './components/Inicio/index.tsx'
import Catalogo from './components/Catalogo/index.tsx'
import Sobrenos from './components/Sobrenos/index.tsx'
import './App.scss';
import Footer from './components/Footer/index.tsx'


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Sobrenos" element={<Sobrenos />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);