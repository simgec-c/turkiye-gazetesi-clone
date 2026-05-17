import React from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <header className="w-screen fixed top-0 left-0 z-50 flex items-center bg-black/80 backdrop-blur-md min-h-[80px]">
      <nav className="container mx-auto flex items-center justify-between px-5">
        <img src="/logo.svg" alt="logo" className="h-24 w-auto cursor-pointer" />
        <ul className="flex items-center gap-4">
          {navLinks.map(({ label, primary }) => (
            <li key={label}>
              <a
                href={label}
                className={
                  primary
                    ? 'border border-zinc-400 hover:border-white text-zinc-300 hover:text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200'
                    : 'text-gray-300 hover:text-white text-sm transition-colors duration-200'
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
        <button>
          <img src="/search.svg" alt="Search" />
        </button>
        <button>
          <img src="/cart.svg" alt="Cart" />
        </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;