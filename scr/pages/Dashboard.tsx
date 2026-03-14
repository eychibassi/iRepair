import React from 'react';
import { ServiceOrder } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, Ticket, CheckCircle2 } from 'lucide-react';    

interface DashboardProps {
  orders: ServiceOrder[];
}

// Dados fictícios para o Trimestre
const financialData = [
  { mes: 'Janeiro', faturamento: 8500, custos: 3200, lucro: 5300 },
  { mes: 'Fevereiro', faturamento: 7200, custos: 2800, lucro: 4400 },
  { mes: 'Março', faturamento: 11000, custos: 4100, lucro: 6900 },
];
export const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 pt-10">
      
      {/* Título Centralizado */}
      <div className="text-center mb-20">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight uppercase">
          - Dashboard de Acompanhamento -
        </h1>
        <p className="text-base font-bold text-slate-400 uppercase tracking-widest leading-none mt-10">
          Relatório Trimestral
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto"> {/* Container para alinhar tudo ao centro */}
        
        {/* PRIMEIRA LINHA: GRÁFICO E CARDS FINANCEIROS */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* LADO ESQUERDO: GRÁFICO */}
          <div className="lg:w-2/3 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col">
            <div className="flex-1 min-h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={financialData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="faturamento" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={35} />
                  <Bar dataKey="custos" fill="#f43f5e" radius={[6, 6, 0, 0]} barSize={35} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* LADO DIREITO: CARDS LATERAIS */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <div className="flex-1 bg-green-500 p-6 rounded-[2rem] shadow-xl shadow-green-100 border-b-4 border-green-600 flex flex-col justify-center">
              <p className="text-green-100 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Lucro Líquido</p>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-black text-white leading-none">R$ 6.900,00</h3>
                
              </div>
            </div>

            <div className="flex-1 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Faturamento Total</p>
              <h3 className="text-2xl font-black text-blue-600 uppercase leading-none">R$ 11.000,00</h3>
              <div className="w-full bg-blue-50 h-1.5 mt-4 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-full"></div>
              </div>
            </div>

            <div className="flex-1 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Custos Operacionais</p>
              <h3 className="text-2xl font-black text-rose-500 uppercase leading-none">R$ 4.100,00</h3>
              <div className="w-full bg-rose-50 h-1.5 mt-4 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[37%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- AQUI ENTRA A SEGUNDA LINHA QUE VOCÊ PEDIU --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pb-10">
          
          {/* CARD: NOVOS CLIENTES */}
<div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 flex flex-col justify-between">
  <div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
      Novos Clientes
    </p>
    
    <div className="flex items-center justify-center">
      {/* GRUPO: + E NÚMERO */}
      <div className="flex items-start">
        <span className="text-2xl font-black text-yellow-200 mt-1">+</span>
        <h3 className="text-4xl font-black text-yellow-200 leading-none tracking-tighter">
          24
        </h3>
      </div>
      
      {/* ÍCONE DE PESSOA */}
      <div className="bg-slate-900  p-3 rounded-2xl flex items-center justify-center">
        <Users size={36} className="text-yellow-200" />
      </div>
    </div>

    {/* Barra Amarela de Progresso */}
    <div className="w-full bg-slate-800 h-1.5 mt-8 rounded-full overflow-hidden">
      <div className="bg-yellow-200 h-full w-full rounded-full shadow-[0_0_10px_rgba(254,240,138,0.4)]"></div>
    </div>
  </div>   
</div>
          {/* CARD: TICKET MÉDIO */}
<div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 flex flex-col justify-between">
  <div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
      Ticket Médio
    </p>
    
    <div className="flex justify-center w-full py-2">
      <h3 className="text-4xl font-black text-emerald-400 leading-none">R$ 458</h3>
    </div>
  </div>

  <div className="w-full bg-blue-50 h-1.5 mt-4 rounded-full overflow-hidden">
    <div className="bg-emerald-400 h-full w-[100%]"></div>
  </div>
</div>
          {/* CARD: OS FINALIZADAS */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 flex flex-col justify-between">
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Ordens Finalizadas</p>
              <div className="flex justify-center w-full py-2">
      <h3 className="text-4xl font-black text-violet-600 leading-none">186</h3>
    </div>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i <= 6 ? 'bg-violet-600' : 'bg-slate-700'}`}></div>
              ))}
            </div>
          </div>

        </div>
        {/* --- FIM DA SEGUNDA LINHA --- */}

      </div>
    </div>
  );
};