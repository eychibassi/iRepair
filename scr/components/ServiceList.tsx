import React from 'react';
import { ServiceOrder, Status } from '../types';
import { ServiceOrderCard } from './ServiceCard';

interface ServiceListProps {
  orders: ServiceOrder[];
  onDelete: (id: string) => void;
  onFinish: (id: string) => void;
}

export const ServiceList = ({ orders, onDelete, onFinish }: ServiceListProps) => {

  const abertas = orders.filter(o => o.status === 'aberto');
  const finalizadas = orders.filter(o => o.status === 'finalizado');

  return (
    <div className="flex flex-col gap-6 w-full mt-10">
      
      <div className="text-center mb-6"> 
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          - ORDENS DE SERVIÇO -
        </h2>
        <div className="flex justify-center gap-8 mt-1 pt-6">
          {/* Atualizamos os contadores para mostrar o tamanho real das listas */}
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Abertas: {abertas.length}
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Finalizadas: {finalizadas.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        
        {/* Coluna Ordens Abertas */}
        <div className="bg-slate-50 rounded-3xl p-6 border-2 border-dashed border-slate-200 min-h-[450px] flex flex-col">
          <h3 className="w-full text-xs font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-200" />
            Ordens Abertas
          </h3>
          
          {/* 3. Lógica para mostrar os Cards ou a Mensagem de Vazio */}
          <div className="flex flex-col gap-4">
            {abertas.length > 0 ? (
              abertas.map(ordem => (
                <ServiceOrderCard key={ordem.id} order={ordem} onDelete={onDelete} onFinish={onFinish} />
              ))
            ) : (
              <div className="pt-20 text-center px-10">
                <p className="text-slate-400 text-sm font-medium">Nenhuma ordem aberta no momento...</p>
              </div>
            )}
          </div>
        </div>

        {/* Coluna Ordens Finalizadas */}
        <div className="bg-slate-50 rounded-3xl p-6 border-2 border-dashed border-slate-200 min-h-[450px] flex flex-col">
          <h3 className="w-full text-xs font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse shadow-sm shadow-rose-400" />
            Ordens Finalizadas
          </h3>

          <div className="flex flex-col gap-4">
            {finalizadas.length > 0 ? (
              finalizadas.map(ordem => (
                <ServiceOrderCard key={ordem.id} order={ordem} onDelete={onDelete} onFinish={onFinish}/>
              ))
            ) : (
              <div className="pt-20 text-center px-10">
                <p className="text-slate-400 text-sm font-medium">O histórico de OS aparecerá aqui...</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};