import React, { useState } from 'react';
import { ServiceOrder, Status } from '../types';

export const NewOrderBox = () => {
  return (
    <section className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-50">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          Registrar Novo Reparo
        </h2>
        <p className="text-slate-400 font-medium mt-1">Insira os detalhes técnicos da nova OS.</p>
      </div>

      <form className="grid grid-cols-2 gap-x-8 gap-y-6">
        {/* Lado Esquerdo: Dados do Cliente */}
<div className="flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Nome do Cliente
  </label>
  <input 
    type="text" 
    placeholder="Ex: Sophia"
    /* bg-blue-100 é um azul sólido e opaco bem visível */
    className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
  />
</div>

{/* Lado Direito: Equipamento */}
<div className="flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Aparelho / Modelo
  </label>
  <input 
    type="text" 
    placeholder="Ex: iPhone 15 Pro"
    className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700"
  />
</div>

{/* Área de Descrição */}
<div className="col-span-2 flex flex-col gap-2">
  <label className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">
    Descrição do Defeito
  </label>
  <textarea 
    rows={3}
    placeholder="Descreva o problema relatado pelo cliente..."
    className="w-full p-4 bg-blue-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-semibold text-slate-700 resize-none"
  />
</div>

        {/* Botão de Ação */}
        <div className="col-span-2 pt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]">
            GERAR ORDEM DE SERVIÇO
          </button>
        </div>
      </form>
    </section>
  );
};