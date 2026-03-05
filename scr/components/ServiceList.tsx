import React from 'react';
import { Status } from '../types';

export const ServiceList = () => {
  return (
    
    <div className="flex flex-col gap-6 w-full mt-10">
      
      
      <div className="text-center mb-6 pt-2"> 
        <h2 className="text-2xl mb-4 font-black text-slate-800 tracking-tight uppercase">
          - Dashboard de Acompanhamento -
        </h2>
        <div className="flex justify-center gap-8 mt-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Abertas: 0
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Finalizadas: 0
          </span>
        </div>
      </div>

      {/* Grid das Duas Colunas (Abertas e Finalizadas) */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* Coluna Ordens Abertas */}
<div className="bg-slate-50 rounded-3xl p-6 border-2 border-dashed border-slate-200 min-h-[450px] flex flex-col">
  
  <h3 className="w-full text-xs font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-200" />
    Ordens Abertas
  </h3>
  
  <div className="flex-1 flex justify-center pt-20">
    <p className="text-slate-400 text-sm font-medium text-center px-10">
      Nenhuma ordem aberta no momento...
    </p>
  </div>
</div>

{/* Coluna Ordens Finalizadas */}
<div className="bg-slate-50 rounded-3xl p-6 border-2 border-dashed border-slate-200 min-h-[450px] flex flex-col">
  
  <h3 className="w-full text-xs font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
    <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse shadow-sm shadow-rose-400" />
    Ordens Finalizadas
  </h3>

  <div className="flex-1 flex justify-center pt-20">
    <p className="text-slate-400 text-sm font-medium text-center px-10">
      O histórico de OS aparecerá aqui...
    </p>
  </div>
</div>

      </div>
    </div>
  );
};