import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
  <header className="sticky top-0 z-50 flex items-center justify-between py-8 px-10 mb-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),0_8px_10px_-6px_rgba(0,0,0,0.2)] border-b border-slate-200 bg-white">
  {/* LADO ESQUERDO: iRepair */}
  <div className="flex-1">
  <Link to="/" className="text-5xl tracking-tighter ml-0 font-bold flex items-center leading-[0.8]"> 
    <span className="text-blue-600">i</span>
    <span className="font-semibold text-slate-800">Repair</span>
  </Link>
</div>

<nav className="flex items-center gap-10">
        <Link 
          to="/" 
          className={`text-xl font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 transition-all duration-300 transform hover:scale-110`}
        >
          Dashboard
        </Link>
        <Link 
          to="/clients" 
          className={`text-xl font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 transition-all duration-300 transform hover:scale-110`}
        >
          Clientes
        </Link>
        <Link 
          to="/orders" 
          className={`text-xl font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-600 transition-all duration-300 transform hover:scale-110`}
        >
          Ordens
        </Link>
      </nav>
  
  {/* LADO DIREITO: Painel e Perfil */}
  <div className="flex-1 flex items-center justify-end gap-12">
    {/* Indicador de Localização */}
    <div className="flex items-center gap-3">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </span>
      <span className="text-base font-bold text-slate-400 uppercase tracking-widest leading-none">
        Painel Administrativo
      </span>
    </div>
    
    {/* Container do Perfil */}
    <div className="relative flex flex-col items-center group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md border-2 border-white ring-1 ring-slate-200 group-hover:bg-blue-700 transition-colors z-10">
        EK
      </div>

      <span className="absolute top-16 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out text-xs font-black text-slate-500 uppercase tracking-tighter whitespace-nowrap pt-1">
        Ver Perfil
      </span>
    </div>
  </div>
</header>
)};