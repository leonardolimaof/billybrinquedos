import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/index.tsx'
import Inicio from './components/Inicio/index.tsx'
import Catalogo from './components/Catalogo/index.tsx'
import Sobrenos from './components/Sobrenos/index.tsx'
import Footer from './components/Footer/index.tsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8 mt-24">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Catalogo" element={<Catalogo />} />
            <Route path="/Sobrenos" element={<Sobrenos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);