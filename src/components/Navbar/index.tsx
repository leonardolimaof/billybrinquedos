import { NavLink } from "react-router-dom";
import Logo from "../../components/Imagens/Logo.png";
import insta from "../../components/Imagens/icons8-instagram.svg";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-lg"
    }`}>
      <div className="container mx-auto">
        <div className="relative mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Container */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="BillyBrinquedos" className="h-20 w-auto" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-billy-yellow/10 hover:text-billy-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-billy-yellow"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-display font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-billy-blue"
                    : "text-gray-700 hover:text-billy-blue"
                }`
              }
            >
              <svg className="h-5 w-5 mr-1.5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="relative">
                Início
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-billy-blue/80 to-billy-blue scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </span>
            </NavLink>
            <NavLink
              to="/Catalogo"
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-display font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-billy-yellow"
                    : "text-gray-700 hover:text-billy-yellow"
                }`
              }
            >
              <svg className="h-5 w-5 mr-1.5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="relative">
                Catálogo
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-billy-yellow/80 to-billy-yellow scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </span>
            </NavLink>
            <NavLink
              to="/Sobrenos"
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-display font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-billy-red"
                    : "text-gray-700 hover:text-billy-red"
                }`
              }
            >
              <svg className="h-5 w-5 mr-1.5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <span className="relative">
                Sobre Nós
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-billy-red/80 to-billy-red scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </span>
            </NavLink>
            <a
              href="https://instagram.com/billybrinquedos"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-3 py-2 text-sm font-display font-semibold tracking-wide text-gray-700 hover:text-billy-yellow transition-colors duration-200"
            >
              <img src={insta} alt="Instagram do BillyBrinquedos" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">Instagram</span>
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="space-y-2 px-4 pb-4 pt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2.5 text-base font-display font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-billy-blue bg-billy-blue/10 shadow-sm"
                    : "text-gray-700 hover:text-billy-blue hover:bg-billy-blue/10"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Início
            </NavLink>
            <NavLink
              to="/Catalogo"
              className={({ isActive }) =>
                `block px-4 py-2.5 text-base font-display font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-billy-yellow bg-billy-yellow/10 shadow-sm"
                    : "text-gray-700 hover:text-billy-yellow hover:bg-billy-yellow/10"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Catálogo
            </NavLink>
            <NavLink
              to="/Sobrenos"
              className={({ isActive }) =>
                `block px-4 py-2.5 text-base font-display font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-billy-red bg-billy-red/10 shadow-sm"
                    : "text-gray-700 hover:text-billy-red hover:bg-billy-red/10"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </NavLink>
            <a
              href="https://instagram.com/billybrinquedos"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-base font-display font-semibold tracking-wide text-gray-700 hover:text-billy-yellow hover:bg-billy-yellow/10 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
